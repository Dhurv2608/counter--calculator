import React from 'react'
import { useState } from 'react';
const Counter = () => {
  const [Number, setNumber] = useState(0);
 const Increment =()=>{
    setNumber(Number + 1)
  }
  const Dincrement =()=>{
    setNumber(Number - 1)
  }
  return (

    <div >
      <h1>Click Count {Number}</h1>
      <button onClick={Increment}>Increment</button>
   
      <button onClick={Dincrement}>Dincrement</button>
    </div>
  )
}

export default Counter
