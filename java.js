const toggle = document.getElementById('toggle-menu');
const menu = document.querySelector('.off-canvas__menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('off-canvas__menu--open');
});
function myFunction(x) {
    x.classList.toggle("change");
  }