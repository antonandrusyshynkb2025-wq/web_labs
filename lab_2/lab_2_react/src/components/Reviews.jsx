import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const VARIANT = 2;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error('Помилка завантаження даних');
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="reviews-section" style={{ margin: '2rem 0' }}>
      <h2>Відгуки попередніх роботодавців</h2>
      {loading ? (
        <p>Завантаження відгуків...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {reviews.map((comment) => (
            <div
              key={comment.id}
              style={{
                border: '1px solid var(--border-color, #ccc)',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: 'var(--card-bg, #f9f9f9)',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0' }}>{comment.name}</h4>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', opacity: 0.8 }}>
                <strong>Email:</strong> {comment.email}
              </p>
              <p style={{ margin: 0 }}>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}