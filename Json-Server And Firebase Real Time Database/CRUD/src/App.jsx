import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Create from './Create';
import Upadate from './Update';
import View from './View';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Upadate />}></Route>
      <Route path='/view/:id' element={<View />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
