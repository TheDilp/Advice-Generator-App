const adviceNumber = document.querySelector('.adviceNumber');
const adviceText = document.querySelector('.adviceText');

// Fetch some when the window is loaded
window.onload = function () {
    fetchAdvice();
}

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache"
    }).then(response => response.json()).then(data => {
        let adviceNumberContent = `Advice #${data.slip.id}`;
        let adviceTextContent = `“${data.slip.advice}“`;

        adviceNumber.textContent = adviceNumberContent;
        adviceText.textContent = adviceTextContent;
    })
}