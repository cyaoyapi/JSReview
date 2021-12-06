const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

const daysInput = document.querySelector("#days-input")
const calculateButton = document.querySelector("#calculate-button")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

calculateButton.addEventListener('click', () => {
    let days = daysInput.value;
    let calculateHours = days * hoursPerDay;
    let calculateMinutes = calculateHours * minutesPerHour;
    let calculateSeconds = calculateMinutes * secondsPerMinute;
    hours.innerHTML = `${calculateHours} hours`;
    minutes.innerHTML = `${calculateMinutes} minutes`;
    seconds.innerHTML = `${calculateSeconds} seconds`;
}
)