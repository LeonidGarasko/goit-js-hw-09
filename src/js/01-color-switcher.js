const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]')

startBtn.addEventListener("click", () => {
    timerIdd = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
    startBtn.setAttribute("disabled", "disabled");
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerIdd);
    startBtn.removeAttribute("disabled", "disabled");
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}