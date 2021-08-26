let headerMenuBar = document.querySelector('.header-menu-bar-ctr');
let headerMenu = document.querySelector('.header-menu');
let headerMenuCloseBtn = document.querySelector('.header-menu-close-btn');
let headerMenuBtn = document.querySelector('.header-menu-btn');
let headerMenuInner = document.querySelector('.header-menu-inner');
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

// Pausing video on switching tab
let mainVideo = document.querySelector('.main-video');
document.addEventListener('visibilitychange', () => {
    let state = document.visibilityState;
    if(!mainVideo.paused) {
        if(state === 'hidden') {
            mainVideo.pause();
        }
    }
    else if(mainVideo.paused) {
        if(state === 'visible') {
            mainVideo.play();
        }
    }
})

// Video Play Infinite
function videoReplay() {
    mainVideo.play();
}

// Design container overlay

let designCtrOverlay1 = document.querySelector('.design-ctr-overlay1');
let designCtrOverlay2 = document.querySelector('.design-ctr-overlay2');
let designCtrOverlay3 = document.querySelector('.design-ctr-overlay3');
let designCtrOverlay4 = document.querySelector('.design-ctr-overlay4');
let designCtrOverlay5 = document.querySelector('.design-ctr-overlay5');
let designCtrOverlay6 = document.querySelector('.design-ctr-overlay6');

// 1st
function overlay1() {
    designCtrOverlay1.style.height = "100%";
    designCtrOverlay1.style.width = "100%";
}

function overlayClose1() {
    designCtrOverlay1.style.height = "0";
    designCtrOverlay1.style.width = "0";
}

// 2nd
function overlay2() {
    designCtrOverlay2.style.height = "100%";
    designCtrOverlay2.style.width = "100%";
    designCtrOverlay2.style.padding = "10%";
}

function overlayClose2() {
    designCtrOverlay2.style.height = "0";
    designCtrOverlay2.style.width = "0";
    designCtrOverlay2.style.padding = "0";
}

// 3rd
function overlay3() {
    designCtrOverlay3.style.height = "100%";
    designCtrOverlay3.style.width = "100%";
    designCtrOverlay3.style.padding = "10%";
}

function overlayClose3() {
    designCtrOverlay3.style.height = "0";
    designCtrOverlay3.style.width = "0";
    designCtrOverlay3.style.padding = "0";
}

// 4th
function overlay4() {
    designCtrOverlay4.style.height = "100%";
    designCtrOverlay4.style.width = "100%";
    designCtrOverlay4.style.padding = "10%";
}

function overlayClose4() {
    designCtrOverlay4.style.height = "0";
    designCtrOverlay4.style.width = "0";
    designCtrOverlay4.style.padding = "0";
}


// 5th
function overlay5() {
    designCtrOverlay5.style.height = "100%";
    designCtrOverlay5.style.width = "100%";
    designCtrOverlay5.style.padding = "10%";
}

function overlayClose5() {
    designCtrOverlay5.style.height = "0";
    designCtrOverlay5.style.width = "0";
    designCtrOverlay5.style.padding = "0";
}

// 6t2
function overlay6() {
    designCtrOverlay6.style.height = "100%";
    designCtrOverlay6.style.width = "100%";
    designCtrOverlay6.style.padding = "10%";
}

function overlayClose6() {
    designCtrOverlay6.style.height = "0";
    designCtrOverlay6.style.width = "0";
    designCtrOverlay6.style.padding = "0";
}

// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();

// direct mail
const msgSub = document.querySelector('.direct-mail-sub');
const msgBody = document.querySelector('.direct-mail-body');
const sendBtn = document.querySelector('.send-mail-btn');

sendBtn.addEventListener('click', () => {
    sendBtn.href = `mailto:contact@brakshamchemicals.com?subject=${msgSub.value}&body=${msgBody.value}`
})