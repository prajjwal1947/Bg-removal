import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Results from './pages/Results'
import Navbar from './components/Navbar'
import BuyCredit from './pages/BuyCredit'

export const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
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
