import { use, useEffect, useState } from 'react'
import './App.css'
import questionData from "./questions.json"

function App() {
  const [timer, setTimer] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (currentQuestion < questionData.length - 1) {
      clearInterval(interval);
      setCurrentQuestion((prev) => prev + 1);
      setTimer(10)
    } else {
      setShowScore(true)
    }
    return () => {
      clearInterval(interval)
    }

  }, [timer])

  const HandleAnswer = (selectedOption) => {
    if (selectedOption === questionData[currentQuestion].CorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  }

  const restart = () => {
    setTimer(10);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }
  return (
    <>
      <div className="container">
        {showScore ? (<div className="score" >
          <h2>Your Score is {score}/{questionData.length}</h2>
          <button onClick={restart}>Restart</button>
        </div>) : (
          <div className="quiz-section" >
            <div className="heading">
              <h2>Question {currentQuestion + 1}</h2>
            </div>
            <div className="question">
              <p>{questionData[currentQuestion].question}</p>
            </div>
            <div className="btn">
              {questionData[currentQuestion].options.map((Option, index) => (
                <button onClick={() => HandleAnswer(Option)} key={index}>{Option}</button>
              ))}
            </div>
            <div className="timer">
              <p>Time left <span>{timer}s</span></p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App
