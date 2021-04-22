const title = document.getElementById('title');
const inputDate = document.getElementById('date-picker');
const formData = document.getElementById('form');


let titleValue = '';
let dateValue = '';
const today = new Date().toISOString().split("T")[0];

// set min date so user can't pick any dates in past
inputDate.setAttribute('min', today);


function getData(e) {
    e.preventDefault();
    titleValue = e.srcElement[0].value;
    dateValue = e.srcElement[1].value;
    console.log(titleValue, dateValue);
}

formData.addEventListener('submit', getData);

