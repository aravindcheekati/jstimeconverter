let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function calcualtion() {
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter valid number of hours";
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter valid number of minutes";
    } else {
        let hoursValue = parseInt(hoursInput.value);
        let minuteValue = parseInt(minutesInput.value);
        let seconds = (hoursValue * 3600) + (minuteValue * 60);
        timeInSeconds.classList.add('timeline');
        timeInSeconds.textContent = seconds + 's';
    }
}
convertBtn.addEventListener('click', calcualtion);
