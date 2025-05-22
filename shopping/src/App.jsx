import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ViewCart } from './component/ViewCart'
import { Header } from './component/Header'
import { Home } from './component/Home'
import { createContext, useState } from 'react'


export const cartContext = createContext();

function App() {
 const [cart,setCart] = useState([])

  return (
    <cartContext.Provider value={{cart,setCart}}>
         <BrowserRouter>
    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Cart' element={<ViewCart />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
      
    </cartContext.Provider>
  )
}

export default App
