document.addEventListener('DOMContentLoaded', function () {
    const welcomeEl = document.querySelector('.welcome');
    const dots = document.querySelectorAll('.pagination-dot');
    const totalSlides = 5;
    let currentSlide = 0;

    const images = [
      './Img/pagination/1.png',
      './Img/pagination/2.png',
      './Img/pagination/3.png',
      './Img/pagination/4.png',
      './Img/pagination/5.png'
    ];

    function updateSlide(index) {
      welcomeEl.style.backgroundImage = `url(${images[index]})`;
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      currentSlide = index;
    }

    
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide(currentSlide);
    }, 20000);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        updateSlide(index);
      });
    });

    updateSlide(0);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const motivationEl = document.querySelector('.motivation'); // 🔥 ЗМІНИЛИ НА .motivation
    const dots = document.querySelectorAll('.pagination-dot');
    const totalSlides = 5;
    let currentSlide = 0;

    const images = [
      './Img/pagination/1.png',
      './Img/pagination/2.png',
      './Img/pagination/3.png',
      './Img/pagination/4.png', 
      './Img/pagination/5.png'
    ];

    function updateSlide(index) {
      motivationEl.style.backgroundImage = `url(${images[index]})`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      currentSlide = index;
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide(currentSlide);
    }, 20000);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        updateSlide(index);
      });
    });

    updateSlide(0);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.toggle('active');
      });
      document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('active');
        }
      });
    }
  });