// Get references to the elements in index.html
const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");

const pomodoroTimer = document.getElementById("pomodoro");
const shortBreakTimer = document.getElementById("short-break");
const longBreakTimer = document.getElementById("long-break");

// Default: hide all timers except pomodoro
shortBreakTimer.style.display = "none";
longBreakTimer.style.display = "none";

// Function that toggles display of a given timer
function toggleDisplay(timer) {
    // Hide all timers
    pomodoroTimer.style.display = "none";
    shortBreakTimer.style.display = "none";
    longBreakTimer.style.display = "none";

    // Display selected timer
    timer.style.display = "flex";
}

// Add click event listeners to the buttons
pomodoroButton.addEventListener("click", function() {
    toggleDisplay(pomodoroTimer);
});

shortBreakButton.addEventListener("click",function() {
    toggleDisplay(shortBreakTimer);
})

longBreakButton.addEventListener("click", function() {
    toggleDisplay(longBreakTimer);
})