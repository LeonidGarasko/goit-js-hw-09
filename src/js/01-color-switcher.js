const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]')

let intervalID;
startBtn.addEventListener("click", () => {
    intervalID = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
    startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    startBtn.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}