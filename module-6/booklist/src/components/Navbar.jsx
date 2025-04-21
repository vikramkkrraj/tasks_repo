import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate()
  return (
    <nav>
        <h2 onClick={() => navigate('/')} style={{cursor : "pointer"}}>📚 Book Finder</h2>
        <button onClick={toggleTheme}>{theme === "light" ? "🌙 Dark" : "☀️ Light"}</button>
    </nav>
  )
}
