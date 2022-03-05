const adviceNumber = document.querySelector('.adviceNumber');
const adviceText = document.querySelector('.adviceText');

let x = window.matchMedia("(min-width: 1440px)");
// Fetch some when the window is loaded
window.onload = function () {
    setDivider(x);
    fetchAdvice();
    x.addEventListener("change", setDivider)
}

// Function to fetch advice with API and set textContent of elements 
function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache"
    }).then(response => response.json()).then(data => {
        let adviceNumberContent = `ADVICE #${data.slip.id}`;
        let adviceTextContent = `“${data.slip.advice}“`;

        adviceNumber.textContent = adviceNumberContent;
        adviceText.textContent = adviceTextContent;
    })
}

// Function for changing the divider based on screen size
function setDivider(screenSize) {
    let divider = document.getElementById('divider');
    if (screenSize.matches) {
        divider.src = "pattern-divider-desktop.svg";
    } else {
        divider.src = "pattern-divider-mobile.svg";
    }
}