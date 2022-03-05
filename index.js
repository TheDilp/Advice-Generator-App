const adviceNumber = document.querySelector('.adviceNumber');
const adviceText = document.querySelector('.adviceText');

document.onload()

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
        let adviceNumberContent = `Advice #${data.slip.id}`;
        let adviceTextContent = data.slip.advice;

        adviceNumber.textContent = adviceNumberContent;
        adviceText.textContent = adviceTextContent;
    })
}