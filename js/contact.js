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