import { useState } from 'react'
import './App.css'
import logo from './assets/currency-exchange.svg'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [amount,setAmount] = useState(1);
  const [fromCurrency,setfromCurrecny] = useState("USD");
  const [toCurrency,settoCurrency] = useState("INR")
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [exchangeRate,setexchangeRate] = useState(null);

  useEffect(()=>{
    const getexchange = async ()=>{
      try {
        const url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        const res = await axios.get(url);
        console.log(res);
        setexchangeRate(res.data.rates[toCurrency])
      } catch (error) {
        console.error("Error at fetching: ",error);
      }
    };
    getexchange()
  },[fromCurrency,toCurrency])

useEffect(()=>{
  if(exchangeRate!==null){
    setConvertedAmount((amount*exchangeRate).toFixed(2));
  }
},[amount,exchangeRate])
 

  const amountChange = (e)=>{
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value)?0:value);
  };
  const fromCurrencyChange = (e)=>{
    const value = e.target.value;
    setfromCurrecny(value)
  };

  const tocurrencyChange = (e)=>{
    const value = e.target.value;
    settoCurrency(value)
  }


  return (
    <>
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
     <div className="box">
      <div className="title">
        <h3>CURRENCY CONVERTER</h3>
        </div>
        <div className="input-container">
          <div className="amount">
          <label htmlFor="Amount">Amount:</label>
          <input type="text" value={amount} onChange={amountChange} name="amount" id="amount" placeholder='Enter the Amount'/>
          </div>
        <div className="from">
          <label htmlFor="from-currency">From Currency:</label>
          <select name="from-currency" onChange={fromCurrencyChange} value={fromCurrency} id="fromCurrency">
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - EURO</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY -Chinese Yuan</option>
            <option value="INR">INR - Indian Rupees</option>
            <option value="BRL">BRL - Brazilizn Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="to">
          <label htmlFor="to-currency">TO Currency:</label>
          <select name="to-currency" onChange={tocurrencyChange} value={toCurrency} id="toCurrency">
          <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - EURO</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY -Chinese Yuan</option>
            <option value="INR">INR - Indian Rupees</option>
            <option value="BRL">BRL - Brazilizn Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="result">
          <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
        </div>
        </div>
        </div> 
    
    </div>
    </>
  )
}

export default App
