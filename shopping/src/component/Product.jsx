import React, { useContext } from 'react'
import "./product.css"
import { cartContext } from '../App';

export const Product = ({product}) => {

  const {cart,setCart} = useContext(cartContext);
  const addCart = ()=>{
    setCart([...cart,product]);
  };
  const removeCart = ()=> {
    setCart(cart.filter((c)=>c.id!==product.id))
  };
  return (
    <>
        <div className="product-card">
  <div className="product-image">
    <img src={product.pic} alt={product.Name} />
  </div>
  <div className="details">
    <h3>{product.Name}</h3>
    <p>${product.price}</p>
    {cart.includes(product)?(
      <button onClick={removeCart} className='RemoveCart'>Remove from Cart</button>
    ):(
      <button onClick={addCart} >Add to Cart</button>
    )}
  </div>
  
</div>

    </>
  )
}
