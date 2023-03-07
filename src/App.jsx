import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import OrderDetails from './02-rwd/OrderDetails_Group'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<OrderDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
