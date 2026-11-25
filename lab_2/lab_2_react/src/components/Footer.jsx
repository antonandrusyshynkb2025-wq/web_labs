import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || 'Невизначено',
    };

    localStorage.setItem('systemInfo', JSON.stringify(info));

    const saved = JSON.parse(localStorage.getItem('systemInfo'));
    if (saved) {
      setSystemInfo(saved);
    }
  }, []);

  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '1.5rem',
        borderTop: '1px solid var(--border-color, #ccc)',
        fontSize: '0.85rem',
        opacity: 0.8,
      }}
    >
      <p style={{ margin: '0 0 5px 0' }}>
        <strong>Операційна система / Платформа:</strong> {systemInfo.platform}
      </p>
      <p style={{ margin: 0, wordBreak: 'break-all' }}>
        <strong>Браузер (User Agent):</strong> {systemInfo.userAgent}
      </p>
    </footer>
  );
}