
const endDate = "12 March 2024 07:11:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        // If the end date has passed, set all inputs to 0
        inputs.forEach(input => input.value = 0);
        return;
    }

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(diff / 86400);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    // Update input values
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

// Initial call
clock();

// Update the countdown every second
setInterval(clock, 1000);
