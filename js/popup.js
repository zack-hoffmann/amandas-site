document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  // Make all game-box images clickable
  document.querySelectorAll('.game-box img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  // Close when clicking the X
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Close when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
