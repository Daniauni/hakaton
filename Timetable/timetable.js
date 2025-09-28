<<<<<<< HEAD
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
=======
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
>>>>>>> 158a6e4a6cfed2c5630e893b842b561e312eb409
