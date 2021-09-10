let headerMenuBar = document.querySelector('.header-menu-bar-ctr');
let headerMenu = document.querySelector('.header-menu');
let headerMenuCloseBtn = document.querySelector('.header-menu-close-btn');
let headerMenuBtn = document.querySelector('.header-menu-btn');
let headerMenuInner = document.querySelector('.header-menu-inner');
let covidUpdateCtr = document.querySelector('.covid-update-ctr');
let covidUpdateCtrCloseBtn = document.querySelector('.covid-update-ctr-close-btn');
let body = document.querySelector('body');

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

// Copy to clipboard
var text1 = document.querySelector(".mob-1");
var text2 = document.querySelector(".mob-2");
var text3 = document.querySelector(".email-1");

if(text1) {
    copyToClipboard(text1);
}

if(text2) {
    copyToClipboard(text2);
}

if(text3) {
    copyToClipboard(text3);
}

function copyToClipboard(text) {
    text.addEventListener("click", () => {
        navigator.clipboard.writeText(text.textContent).then(function() {
            alert("Text Copied!");
        }, function(err) {
            alert("Can't copy text");
        });
    })
}

// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();

// direct mail
const msgSub = document.querySelector('.direct-mail-sub');
const senderMob = document.querySelector('.direct-mail-mob');
const msgBody = document.querySelector('.direct-mail-body');
const sendBtn = document.querySelector('.send-mail-btn');

sendBtn.addEventListener('click', () => {
    sendBtn.href = `mailto:contact@brakshamchemicals.com?subject=${msgSub.value}&body=${senderMob.value},  ${msgBody.value}`
})

// Input focus effect

msgSub.addEventListener('focus', () => {
    msgSub.style.backgroundColor = "#fff"
    msgSub.style.border = "2px solid #aaa"

    senderMob.style.backgroundColor = "#f1f1f1"
    senderMob.style.border = "none"

    msgBody.style.backgroundColor = "#f1f1f1"
    msgBody.style.border = "none"
})

senderMob.addEventListener('focus', () => {
    msgSub.style.backgroundColor = "#f1f1f1"
    msgSub.style.border = "none"

    senderMob.style.backgroundColor = "#fff"
    senderMob.style.border = "2px solid #aaa"

    msgBody.style.backgroundColor = "#f1f1f1"
    msgBody.style.border = "none"
})

msgBody.addEventListener('focus', () => {
    msgSub.style.backgroundColor = "#f1f1f1"
    msgSub.style.border = "none"

    senderMob.style.backgroundColor = "#f1f1f1"
    senderMob.style.border = "none"

    msgBody.style.backgroundColor = "#fff"
    msgBody.style.border = "2px solid #aaa"
})