import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/Cart'
import Navbar from './components/Navbar'
import './App.css'


function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
