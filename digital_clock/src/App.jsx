import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[currentTime, setCurrentTime] = useState(new Date())
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);
    return()=>clearInterval(timer);
  },[])

const format=(hour)=>{
  return hour===0?12:hour>12?hour-12:hour;
}

const zero = (num)=>{
  return num<10?`0${num}`:num;
}

  const formatDate = (date)=>{
    const option = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
  return date.toLocaleDateString(undefined,option)
}

  return (
    <>
        <div className="container">
          <div className="heading">
            <h1>DIGITAL CLOCK</h1>
          </div>
          <div className="time">
            <div className="hr">
              {zero(format(currentTime.getHours()))}:
            </div>
            <div className="min">
              {zero(currentTime.getMinutes())}:
            </div>
            <div className="sec">
              {zero(currentTime.getSeconds())}
            </div>
            <div className="meridiem">{currentTime.getHours()>12?"PM":"AM"}</div>
          </div>
          <div className="dateandday">
            <p>{formatDate(currentTime)} </p>
          </div>
        </div>
        
    </>
  )
}

export default App
