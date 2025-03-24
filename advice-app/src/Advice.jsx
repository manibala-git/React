import React, { useState } from 'react'
import "./Advice.css";

export const Advice = () => {
    const [advice,setAdvice] = useState("Click the button below...");
    const [count,setCount] = useState(0);
  async function getAdvice(){
        const msg = await fetch("https://api.adviceslip.com/advice");
        // console.log(msg);
        const data =await msg.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);

    }
  return (
    <div>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>GET ADVICE</button>
        <p>Advice Number: {count}</p>
    </div>
  )
}
