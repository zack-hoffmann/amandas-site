/* -----------------------------------------------------------
   ACCORDION LOGIC (simple class toggle)
----------------------------------------------------------- */

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('open');
  });
});

/* -----------------------------------------------------------
   CAROUSEL LOGIC — supports 4 images visible at once
----------------------------------------------------------- */

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const imagesPerPage = 4;   // you want 4 visible at once
  const totalPages = Math.ceil(images.length / imagesPerPage);

  let page = 0;

  const update = () => {
    track.style.transform = `translateX(-${page * 100}%)`;
  };

  carousel.querySelector('.next').addEventListener('click', () => {
    page = (page + 1) % totalPages;
    update();
  });

  carousel.querySelector('.prev').addEventListener('click', () => {
    page = (page - 1 + totalPages) % totalPages;
    update();
  });
});



/* -----------------------------------------------------------
   LIGHTBOX POPUP LOGIC
----------------------------------------------------------- */

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// Open lightbox when any carousel image is clicked
document.querySelectorAll('.carousel-track img').forEach(img => {
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
