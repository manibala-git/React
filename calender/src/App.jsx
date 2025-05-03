import { useState } from 'react'
import './App.css'
import left_icon from "./assets/left.svg"
import right_icon from "./assets/right.svg"
const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const DayInMonth = () => {
    const DaysArray = [];

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
      DaysArray.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      DaysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }
    return DaysArray;
  }

  const current = (date1,date2)=>{
    return date1.getDate()===date2.getDate() &&date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }

  const HandleMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
  }

  const HandleYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
  }
  return (
    <>
      <div className="calender">
        <div className="header">
          <button onClick={() => {
            setSelectedDate(
              new Date(selectedDate.getFullYear(),
                selectedDate.getMonth() - 1, 1))
          }} ><img src={left_icon} alt="" /></button>
          <select value={selectedDate.getMonth()} onChange={HandleMonth} >
            {Months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectedDate.getFullYear()} onChange={HandleYear}>
            {
              Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))
            }
          </select>
          <button onClick={() => {
            setSelectedDate(
              new Date(selectedDate.getFullYear(),
                selectedDate.getMonth() + 1, 1))
          }} ><img src={right_icon} alt="" /></button>
        </div>
        <div className="daysOfWeek">
          {Days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {DayInMonth().map((day, index) => (
            <div className={day ? (current(day,new Date())? "day current":"day") : "empty"} key={index}>{day ? day.getDate() : ""}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
