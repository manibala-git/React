import React, { useContext } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../App'

export const Header = () => {
  const {cart} = useContext(cartContext);
  return (
    <>
    <div className="nav">
    <div className="logo">Buy Now</div>
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/Cart"}>
            <span className='cart-length'>{cart.length}</span> View Cart</Link>
        </li>
    </ul>
    
    </div>
    </>
  )
}
