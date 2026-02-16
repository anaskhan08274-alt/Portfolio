import { motion } from "framer-motion";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from '../components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Navbar" element={<Navbar/>} />
      </Routes>
    </div>
  )
}

export default App