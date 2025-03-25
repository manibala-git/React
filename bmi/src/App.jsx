import React, { useState } from 'react'
import './App.css'
import bgimg from './assets/bg.png'

const App = () => {
  const [height,setHeight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmistatus,setbmistatus] = useState("")
  const [bmi,setBmi] = useState(null)
  const [error,setError] = useState()


  const calculateBmi=()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight&&isValidWeight){
      const heightInMeter = height/100;
      const bmiValue = weight/(heightInMeter*heightInMeter);
      setBmi(bmiValue.toFixed(2))
      if(bmiValue<18.5){
        setbmistatus("Underweight");
      }else if(bmiValue>=18.5&&bmiValue<24.9){
        setbmistatus("Normal Weight");
      }else if(bmiValue>=25&&bmiValue<29.9){
        setbmistatus("Over Weight");
      }else{
        setbmistatus("Obese");
      }
      setError()
    }else{
      setBmi(null)
      setbmistatus("")
      setError("Enter valid Height and Weight")
    }
  }
  const clear = () => {
    setHeight("");  // Reset height
    setWeight("");  // Reset weight
    setBmi(null);   // Reset BMI result
    setbmistatus(""); // Reset BMI status
    setError("");  // Reset error message
  };
  
  return (
    <>
      <div className="container">
        <div className="img-container"><img src={bgimg} className="img-fluid" alt="image" /></div>
        <div className="content">
          <h3>BMI Calculator</h3>
         {error&&<p className='error'>{error}</p>} 
          <label htmlFor="height">Height (cm)</label>
          <div className="input-group mb-3">
          <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} className="form-control height" placeholder='Enter your Height' />
          </div>        
          <label htmlFor="weight">weight (kg)</label>
          <div className="input-group mb-3">
            <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} className="form-control weight" aria-label="Sizing example input" placeholder='Enter your weight ' aria-describedby="inputGroup-sizing-default" />
          </div>         
           <div className="button">
            <button type="button" value={height} onClick={calculateBmi} className="btn btn-primary">Enter</button>
            <button type="button" value={height} onClick={clear} className="btn btn-danger">Clear</button>
          </div>
          {bmi!==null && (<div className="result">
            <p className="bmi-result">Your BMI is: {bmi}</p>
            <p className="status">Status: {bmistatus}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App;

