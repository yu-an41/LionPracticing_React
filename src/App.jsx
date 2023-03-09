import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import OrderDetails from './02-rwd/OrderDetails_Group'
import Calendar from './04-calendar/Calendar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/order' element={<OrderDetails/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
