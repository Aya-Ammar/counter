import React from 'react'
import { useState } from 'react'


export default function App() {
    const [counter,setCounter]=useState(0);
    const increase=()=>{
        setCounter(counter+1);
    }
    
    const [showProduct,setShowProduct]=useState(false);
    const show=()=>{
      setShowProduct(!showProduct);
    }
    const product={
      name:"iPhone 14",
      price:"$1200",
      description:"A premium smartphone with advanced features"
    };
  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={increase}>increse counter</button>
    <br />
    <br />
    <button onClick={show}> Show Product </button>
    {showProduct && (
     <div>
           <h2>Product Details</h2>
           <h3>Name:{product.name}</h3>
           <h3>Price:{product.price}</h3>
           <h3>Description:{product.description}</h3>
           
     </div>
    )}
    </>
  )
}
