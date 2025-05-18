/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Results from './pages/Results'
import Navbar from './components/Navbar'
import BuyCredit from './pages/BuyCredit'


import { ToastContainer, toast } from 'react-toastify';
export const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right>'></ToastContainer>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Results />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
    </div>
  )
}

export default App
