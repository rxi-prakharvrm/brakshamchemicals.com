// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();

// direct mail
const msgSub = document.querySelector('.direct-mail-sub');
const senderMob = document.querySelector('.direct-mail-mob');
const msgBody = document.querySelector('.direct-mail-body');
const sendBtn = document.querySelector('.send-mail-btn');

sendBtn.addEventListener('click', () => {
    sendBtn.href = `mailto:contact@brakshamchemicals.com?subject=${msgSub.value}&body=${senderMob.value}  \n\n${msgBody.value}`
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