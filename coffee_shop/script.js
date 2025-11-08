// Select DOM elements
const navLinks = document.querySelectorAll('.nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

// --- MOBILE MENU TOGGLE ---
if (menuOpenButton && menuCloseButton) {
  menuOpenButton.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu');
  });

  menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
  });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link =>
  link.addEventListener('click', () => document.body.classList.remove('show-mobile-menu'))
);

// --- SWIPER INITIALIZATION ---
const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: true, // accessibility

  // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1 },
    720: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
