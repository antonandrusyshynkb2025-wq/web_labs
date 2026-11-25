import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('modalClosed')) {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('modalClosed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: 'var(--bg-color, #fff)',
          color: 'var(--text-color, #000)',
          padding: '2rem',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '420px',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'inherit',
          }}
        >
          &times;
        </button>

        <h3 style={{ marginTop: 0 }}>Зворотний зв'язок</h3>
        <form
          action="https://formspree.io/f/xkjjqqqn"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
        >
          <input type="text" name="name" placeholder="Ваше ім'я" required style={{ padding: '8px' }} />
          <input type="email" name="email" placeholder="Ваш Email" required style={{ padding: '8px' }} />
          <input type="tel" name="phone" placeholder="Номер телефону" required style={{ padding: '8px' }} />
          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            rows="4"
            required
            style={{ padding: '8px' }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}