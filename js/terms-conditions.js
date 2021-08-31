let headerMenuBar = document.querySelector('.header-menu-bar-ctr');
let headerMenu = document.querySelector('.header-menu');
let headerMenuCloseBtn = document.querySelector('.header-menu-close-btn');
let headerMenuBtn = document.querySelector('.header-menu-btn');
let headerMenuInner = document.querySelector('.header-menu-inner');
let covidUpdateCtr = document.querySelector('.covid-update-ctr');
let covidUpdateCtrCloseBtn = document.querySelector('.covid-update-ctr-close-btn');
let body = document.querySelector('body');

headerMenuBar.addEventListener("click", () => {
    headerMenu.style.marginTop = '0'
    headerMenuInner.style.display = 'block'
})

headerMenuCloseBtn.addEventListener("click", () => {
    headerMenu.style.marginTop = '-30rem'
    headerMenuInner.style.display = 'none'
})

headerMenuBtn.addEventListener("click", () => {
    headerMenu.style.marginTop = '-30rem'    
})

// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();
