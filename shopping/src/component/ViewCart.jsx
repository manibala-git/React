import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { cartContext } from '../App';

export const ViewCart = () => {
  const {cart,setCart} = useContext(cartContext);
  const [total,setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[cart])

  const RemoveFromCart= (id)=> {
    setCart(cart.filter((c)=>c.id!==id))
  };

  return (
    <>
    <div className="cart-container">
      <h1 className="cart-heading">Cart Products</h1>
      {cart.map((product)=>(
        <div className="cart-product" key={product.id}>
        <div className="img">
          <img src={product.pic} alt="image"/>
        </div>
        <div className="product-details-cart">
        <div className="cart-product-details">
        <h3>{product.Name}</h3>
        <p>Price: {product.price}$</p>
        </div>
        <div className="remove-btn">
          <button className="remove-from-cart" onClick={() => RemoveFromCart(product.id)}>
            Remove
          </button>
          </div>
        </div>
      </div>
      ))}
      <h2 className='total-amt'>Total Price: {total}$</h2>
    </div>
    </>
  )
}
