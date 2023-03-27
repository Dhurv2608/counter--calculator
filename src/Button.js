import React from 'react'
import { Button } from 'react-bootstrap';
import './App.css';

const button = () => {
  const Counter = () =>{
  }
  const Calculator = () =>{
 }
  return (
    <div>
      <header d-flex justify-content-center>
    
         <Button className='button'  color="green" onClick={Counter} type='submit'>Counter</Button>
         <Button className='button' color="green" onClick={Calculator} type='submit'>Calculator</Button>
      </header>
    </div>
  )
}

export default button
