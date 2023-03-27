import React from 'react'
import { useState } from 'react';
import './App.css';
const Counter = () => {
  const [Number, setNumber] = useState(0);
 const Increment =()=>{
    setNumber(Number + 1)
  }
  const Dincrement =()=>{
    setNumber(Number - 1)
  }
  return (
    <div>
    <h1>Count number{Number}</h1>
    <div className='counter '>
    
     <button onClick={Increment} >Increment</button> 
     <button onClick={Dincrement}>Dincrement</button> 
    </div>
    </div>
  )
}

export default Counter
