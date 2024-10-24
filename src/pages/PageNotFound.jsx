/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            PageNotFound.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import React, { useState, useEffect } from 'react'
import { useMoveBack } from '../hooks/useMoveBack'

export default function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const moveBack = useMoveBack()

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.3s ease',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f4f8',
      color: isDarkMode ? '#ffffff' : '#333333',
    },
    box: {
      backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
      borderRadius: '12px',
      padding: '3rem',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'center',
      boxShadow: isDarkMode 
        ? '0 4px 6px rgba(0, 0, 0, 0.2)' 
        : '0 4px 6px rgba(0, 0, 0, 0.1)',
      '@media (max-width: 768px)': {
        padding: '2rem',
        maxWidth: '90%',
      },
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      color: isDarkMode ? '#9c88ff' : '#4a4a4a',
      '@media (max-width: 768px)': {
        fontSize: '2rem',
      },
    },
    text: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      lineHeight: '1.5',
      '@media (max-width: 768px)': {
        fontSize: '1rem',
      },
    },
    button: {
      backgroundColor: isDarkMode ? '#9c88ff' : '#3498db',
      color: '#ffffff',
      border: 'none',
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      '@media (max-width: 768px)': {
        padding: '0.7rem 1rem',
      },
    },
    themeToggle: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: 'transparent',
      border: 'none',
      color: isDarkMode ? '#ffffff' : '#333333',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  }

  return (
    <div style={styles.container}>
      <button onClick={toggleTheme} style={styles.themeToggle}>
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      <div style={styles.box}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.text}>
          The page you are looking for could not be found 😢
        </p>
        <button 
          onClick={moveBack}
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = isDarkMode ? '#8066ff' : '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = isDarkMode ? '#9c88ff' : '#3498db'}
        >
          ← Go back
        </button>
      </div>
    </div>
  )
}
