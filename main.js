document.addEventListener('DOMContentLoaded', function () {
  const welcomeEl = document.querySelector('.welcome');
  const dots = document.querySelectorAll('.pagination-dot');
  const totalSlides = 5;
  let currentSlide = 0;

  function getSlideImages() {
    const width = window.innerWidth;
    console.log("Window width:", width);

    if (width <= 414) {
      return [
        './Img/welcome/adaptation/1.png',
        './Img/welcome/adaptation/2.png',
        './Img/welcome/adaptation/3.png',
        './Img/welcome/adaptation/4.png',
        './Img/welcome/adaptation/5.png'
      ];
    } else {
      return [
        './Img/pagination/1.png',
        './Img/pagination/2.png',
        './Img/pagination/3.png',
        './Img/pagination/4.png',
        './Img/pagination/5.png'
      ];
    }
  }

  let images = getSlideImages();

  function updateSlide(index) {
    welcomeEl.style.backgroundImage = `url(${images[index]})`;
    welcomeEl.style.backgroundSize = 'cover';
    welcomeEl.style.backgroundPosition = 'center';

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

  window.addEventListener('resize', function () {
    const newImages = getSlideImages();
    if (JSON.stringify(newImages) !== JSON.stringify(images)) {
      images = newImages;
      updateSlide(currentSlide);
    }
  });

  updateSlide(0);
});

document.addEventListener('DOMContentLoaded', function () {
  const motivationEl = document.querySelector('.motivation');
  const motivationDots = document.querySelectorAll('.motivation-pagination .pagination-dot'); // 🔥 Важливо: вказуємо конкретний контейнер
  const totalSlides = 5;
  let currentSlide = 0;

  function getMotivationImages() {
    const isMobile = window.innerWidth <= 414;
    if (isMobile) {
      return [
        './Img/welcome/adaptation/1.png',
        './Img/welcome/adaptation/2.png',
        './Img/welcome/adaptation/3.png',
        './Img/welcome/adaptation/4.png',
        './Img/welcome/adaptation/5.png'
      ];
    } else {
      return [
        './Img/pagination/1.png',
        './Img/pagination/2.png',
        './Img/pagination/3.png',
        './Img/pagination/4.png',
        './Img/pagination/5.png'
      ];
    }
  }

  let motivationImages = getMotivationImages();

  function updateMotivationSlide(index) {
    motivationEl.style.backgroundImage = `url(${motivationImages[index]})`;
    motivationEl.style.backgroundSize = 'cover';
    motivationEl.style.backgroundPosition = 'center';

    motivationDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateMotivationSlide(currentSlide);
  }, 20000);

  motivationDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateMotivationSlide(index);
    });
  });

  window.addEventListener('resize', function () {
    const newImages = getMotivationImages();
    if (JSON.stringify(newImages) !== JSON.stringify(motivationImages)) {
      motivationImages = newImages;
      updateMotivationSlide(currentSlide);
    }
  });

  updateMotivationSlide(0);
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

  function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
