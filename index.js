const hamburger = document.getElementById('hamburger');
const rightNav = document.querySelector('.right-nav');

hamburger.addEventListener('click', () => {
  rightNav.classList.toggle('active');
});
