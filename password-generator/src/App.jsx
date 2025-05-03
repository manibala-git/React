import { useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [uppercase,setUppercase] = useState(true);
  const [Lowercase,setLowercase] = useState(true);
  const [numbers,setNumbers] = useState(true);
  const [symbol,setSymbol] = useState(true);
  const [password,setPassword] = useState("");

const generatePassword = () => {
  let charset = "";
  if(uppercase) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(Lowercase) charset+="abcdefghijklmnopqrstuvwxyz";
  if(numbers) charset+="1234567890";
  if(symbol) charset+="@#$%&*-+/";
  let generatePass = "";
  for(let i=0;i<length;i++){
   let num=Math.floor(Math.random()*charset.length)
    generatePass += charset[num];
  }
  setPassword(generatePass);
  }

  const copy = ()=>{
      navigator.clipboard.writeText(password);
      alert("Password Coiped");
  }
  return (
    <>
     <div className="container">
      <h3>STRONG PASSWORD GENERATOR</h3>
      <div className="length">
      <label htmlFor="length">Password Length</label>
      <input type="number" className='input-lenght' value={length} onChange={(e)=>setLength(parseInt(e.target.value))} name="length"/>
      </div>
      <div className="checkbox-group">
        <div className="input-checkbox">
          <input type="checkbox" checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)}  name="checkbox" />
          <label htmlFor="checkbox">Include Uppercase</label>
        </div>
        <div className="input-checkbox">
          <input type="checkbox" checked={Lowercase} onChange={(e)=>setLowercase(e.target.checked)} name="Lowercase" />
          <label htmlFor="Lowercase">Include Lowercase</label>
        </div>
        <div className="input-checkbox">
          <input type="checkbox"checked={numbers} onChange={(e)=>setNumbers(e.target.checked)} name="numbers" />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="input-checkbox">
          <input type="checkbox" onChange={(e)=>setSymbol(e.target.checked)} checked={symbol} name="Symbols" />
          <label htmlFor="Symbols">Include Symbols</label>
        </div>
        <button onClick={generatePassword}>Generate Password</button>
        </div>
        <div className="pass">
        <input type="text" className='pass-text'value={password} readOnly />
          <button  className='copy-btn' onClick={copy}>COPY</button>
        </div>
        
     </div>
    </>
  )
}

export default App
