import React, { useState } from 'react'
import data from "../assets/product.json"
import { Product } from './Product';
import "./Home.css"


export const Home = () => {

  const [products] = useState(data);
  return (
    <>
      <div className="product-container">
        {products.map((product)=>(
          <div key={product.id} className="product-item">
          <Product product={product} />
          </div>
        ))}
      </div>
    </>
  )
}
