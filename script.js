const title = document.getElementById('title');
const inputDate = document.getElementById('date-picker');
const formData = document.getElementById('form');
const countdownTitle = document.getElementById('countdown-title');
const countdownTimer = document.getElementById('countdown-timer');
const time = document.querySelectorAll('span');
const inputContainer = document.getElementById('input-container');


let countTitle = '';
let countDate = '';
let countDateValue = new Date();
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const today = new Date().toISOString().split("T")[0];

// set min date so user can't pick any dates in past
inputDate.setAttribute('min', today);

function countdown() {
    const todayValue = new Date().getTime();
    console.log(todayValue);
    const difference = countDateValue - todayValue;
    console.log('distance', difference);
    const days = Math.floor(difference / day);
    const hours = Math.floor((difference % day) / hour);
    const minutes = Math.floor((difference % hour) / minute);
    const seconds = Math.floor((difference % minute) / second);
    console.log(days, hours, minutes, seconds);
    // show data
    countdownTitle.textContent = `${countTitle}`;
    time[0].textContent = `${days}`;
    time[1].textContent = `${hours}`;
    time[2].textContent = `${minutes}`;
    time[3].textContent = `${seconds}`;

    inputContainer.hidden = true;
    countdownTimer.hidden = false;
}


function getData(e) {
    e.preventDefault();
    countTitle = e.srcElement[0].value;
    countValue = e.srcElement[1].value;
    console.log(countTitle, countValue);
    countDateValue = new Date(countValue).getTime();
    console.log('countdown value:', countDateValue);
    countdown();
}

formData.addEventListener('submit', getData);

