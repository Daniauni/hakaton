document.addEventListener('DOMContentLoaded', function () {
  const welcomeEl = document.querySelector('.welcome');
  const welcomeDots = document.querySelectorAll('.welcome-pagination .pagination-dot');
  let welcomeSlide = 0;
  const welcomeImages = [
    './Img/pagination/1.png',
    './Img/pagination/2.png',
    './Img/pagination/3.png',
    './Img/pagination/4.png',
    './Img/pagination/5.png'
  ];

  function updateWelcomeSlide(index) {
    welcomeEl.style.backgroundImage = `url(${welcomeImages[index]})`;
    welcomeDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    welcomeSlide = index;
  }

  setInterval(() => {
    welcomeSlide = (welcomeSlide + 1) % 5;
    updateWelcomeSlide(welcomeSlide);
  }, 30000);

  welcomeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateWelcomeSlide(index);
    });
  });

  updateWelcomeSlide(0);


  const motivationEl = document.querySelector('.motivation');
  const motivationDots = document.querySelectorAll('.motivation-pagination .pagination-dot');
  let motivationSlide = 0;
  const motivationImages = [
    './Img/pagination/1.png',
    './Img/pagination/2.png',
    './Img/pagination/3.png',
    './Img/pagination/4.png',
    './Img/pagination/5.png'
  ];

  function updateMotivationSlide(index) {
    motivationEl.style.backgroundImage = `url(${motivationImages[index]})`;
    motivationDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    motivationSlide = index;
  }

  setInterval(() => {
    motivationSlide = (motivationSlide + 1) % 5;
    updateMotivationSlide(motivationSlide);
  }, 5000);

  motivationDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateMotivationSlide(index);
    });
  });

  updateMotivationSlide(0);
});