const title = document.getElementById('title');
const inputDate = document.getElementById('date-picker');
const formData = document.getElementById('form');
const countdownTitle = document.getElementById('countdown-title');
const countdownTimer = document.getElementById('countdown-timer');
const time = document.querySelectorAll('span');
const inputContainer = document.getElementById('input-container');
const resetBtn = document.getElementById('reset');
const completeBtn = document.getElementById('reset2');
const completeContainer = document.getElementById('countdown-complete');


let countTitle = '';
let countDate = '';
let countDateValue = new Date();
let activeCount;
let savedCount;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const today = new Date().toISOString().split("T")[0];

// set min date so user can't pick any dates in past
inputDate.setAttribute('min', today);

function countdown() {
    activeCount = setInterval(()=> {
        const todayValue = new Date().getTime();
        const difference = countDateValue - todayValue;
        const days = Math.floor(difference / day);
        const hours = Math.floor((difference % day) / hour);
        const minutes = Math.floor((difference % hour) / minute);
        const seconds = Math.floor((difference % minute) / second);

        inputContainer.hidden = true;
    
        if(difference < 0) {
            countdownTimer.hidden = true;
            completeContainer.hidden = false;
            clearInterval(activeCount);      
        } else {
            completeContainer.hidden = true;
            countdownTimer.hidden = false;
            countdownTitle.textContent = `${countTitle}`;
            time[0].textContent = `${days}`;
            time[1].textContent = `${hours}`;
            time[2].textContent = `${minutes}`;
            time[3].textContent = `${seconds}`;
            
        }      

    }, second);
}




function getData(e) {
    e.preventDefault();
    countTitle = e.srcElement[0].value;
    countValue = e.srcElement[1].value; 
    savedCount = {
        title: countTitle,
        date: countValue
    }
    localStorage.setItem('countdown-timer', JSON.stringify(savedCount)) 
    countDateValue = new Date(countValue).getTime();
    countdown();
}

function populateLocalStorageItems() {
    if(localStorage.getItem('countdown-timer')) {
        inputContainer.hidden = true;
        savedCount = JSON.parse(localStorage.getItem('countdown-timer'));
        countTitle = savedCount.title;
        countValue = savedCount.date;
        countDateValue = new Date(countValue).getTime();
        countdown();
    }    
}

function reset() {
    clearInterval(activeCount);
    countTitle = '';
    countDate = '';
    inputContainer.hidden = false;
    countdownTimer.hidden = true;
    completeContainer.hidden = true;
    localStorage.clear();
}

formData.addEventListener('submit', getData);
resetBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);

populateLocalStorageItems();