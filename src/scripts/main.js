const nav = document.querySelector('.mobile__nav__list');
const burger = document.querySelector('.nav__burger');

burger.addEventListener('click', () => {
  nav.classList.toggle("show__mobile__nav");
});