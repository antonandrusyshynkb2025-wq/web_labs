document.addEventListener('DOMContentLoaded', () => {

  const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform || 'Невідомо',
    language: navigator.language
  };

  localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

  const savedData = JSON.parse(localStorage.getItem('systemInfo'));

  const footerInfo = document.getElementById('footerInfo');
  if (footerInfo && savedData) {
    footerInfo.innerHTML = `
      <p><strong>Операційна система / Платформа:</strong> ${savedData.platform}</p>
      <p><strong>Браузер (User Agent):</strong> ${savedData.userAgent}</p>
      <p><strong>Мова системи:</strong> ${savedData.language}</p>
    `;
  }


  const VARIANT_NUMBER = 1; 

  const commentsContainer = document.getElementById('commentsContainer');

  async function loadComments() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`);
      
      if (!response.ok) {
        throw new Error(`Помилка мережі: ${response.status}`);
      }

      const comments = await response.json();
      commentsContainer.innerHTML = '';

      comments.forEach(comment => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `
          <h4>${comment.name}</h4>
          <div class="email"><strong>Email:</strong> ${comment.email}</div>
          <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(card);
      });

    } catch (error) {
      commentsContainer.innerHTML = `<p style="color: red;">Не вдалося завантажити відгуки: ${error.message}</p>`;
    }
  }

  loadComments();


  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');

  const MODAL_DELAY = 60000; 

  setTimeout(() => {
    if (!sessionStorage.getItem('modalClosed')) {
      modalOverlay.classList.add('active');
    }
  }, MODAL_DELAY);

  closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    sessionStorage.setItem('modalClosed', 'true');
  });


  const themeToggleBtn = document.getElementById('themeToggleBtn');

  function updateThemeButtonText() {
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Денний режим';
    } else {
      themeToggleBtn.textContent = '🌙 Нічний режим';
    }
  }

  function initTimeTheme() {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
    updateThemeButtonText();
  }

  initTimeTheme();

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateThemeButtonText();
  });

});