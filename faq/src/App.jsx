import { useState } from 'react'

import './App.css'

function App() {

  const FaqItem = ({question,answer}) =>{
    const [show,setShow] = useState(false); 
const toggle = ()=>{
  setShow(!show)
}

    return(
      <div className={`item ${show ? "active" : ""}`}>
        <div className="header" onClick={toggle}>
          {question}
        </div>
        <div className="faq-body">
          <div className="item-body">
          {answer}
          </div>
        </div>
      </div>
    );
  }

  const FaqAccordian = ({data})=>{
    return(
     <div className="faq-accrodian">
      <h2>FAQ</h2>
      {data.map((items)=>(
        <FaqItem key={items.id} question={items.question} answer = {items.answer} />
    ))}
     </div>
    );
  }
  

  const data = [
    {
    id: 1,
    question: "What is React",
    answer: "React is an library"
    },
    {
    id: 2,
    question: "Benefits of React",
    answer: "Its user friendly and easy"
    },
    {
    id: 3,
    question: "Major concepts",
    answer: "useState, useEffect"
    }
  ]
  return (
    <>
      <FaqAccordian data = {data}/>
    </>
  )
}

export default App
