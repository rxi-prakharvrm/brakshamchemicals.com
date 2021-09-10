let headerMenu = document.querySelector('.header-menu');

// Header Menu Button Animation
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');

function toggleMenu() {
  line1.classList.toggle('line1-styled');
  line2.classList.toggle('line2-styled');
  line3.classList.toggle('line3-styled');
  headerMenu.classList.toggle("toggle-menu");
}

// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();
