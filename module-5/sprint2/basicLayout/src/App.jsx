import { useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";

import './App.css'
import { Header } from './pages/Header';
import { Main } from './pages/Main';
import { Footer } from './pages/Footer';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Navbar } from './pages/Navbar';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
     <Main />
     <Footer />
    </>
  )
}

export default App
