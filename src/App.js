import './App.css';


import React from 'react'
import Counter from './Counter';
import Calculator from './Calculator';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
const App = () => {

  return (
    <div>
      <Routes>
             <Route path='/' element={<Layout><Counter /></Layout>}></Route>
             <Route path='/Calculator' element={<Layout><Calculator /></Layout>}></Route>
      </Routes>
      
    </div>
  )
}

export default App

  