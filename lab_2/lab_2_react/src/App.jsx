import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-wrapper ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px' }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: '1px solid gray',
          }}
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </div>

      <Header />

      <main style={{ padding: '0 2rem' }}>
        <Education />
        <Experience />
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}