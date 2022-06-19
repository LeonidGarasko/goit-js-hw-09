import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]')
const timer = document.querySelector('.timer')
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
      selectedDate = selectedDates[0].getTime();
    //   console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          window.alert("Please choose a date in the future");
      } else {
          startBtn.removeAttribute("disabled", "disabled");
      }
  },
};


flatpickr(input, options);
startBtn.setAttribute("disabled", "disabled");
startBtn.addEventListener('click', () => {
   const intervalID = setInterval(() => {
        const interval = selectedDate - Date.now();
        const date = convertMs(interval);
        if (date.seconds < 0) {
            clearInterval(intervalID);
            return;
        }
        updateTimer(date);  
    }, 1000)
})

function updateTimer({ days, hours, minutes, seconds }) {
    timer.querySelector('[data-days]').textContent = addLeadingZero(days);
    timer.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    timer.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    timer.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}
