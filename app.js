const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const menulinks = document.querySelectorAll('#menulinks');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('bg-white');
});

menulinks.forEach((menulink) => {
  menulink.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('bg-white');
  });
});