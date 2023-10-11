/*
 * Timer variables
 */
let timer;
let minutes = 25; // will need to change based off of selected timer
let seconds = 0;
let isRunning = false;


/* 
 * Get references to the elements in index.html:
 */
// Buttons to switch between timers
const pomodoroButton = document.getElementById("pomodoro-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");

// Timers
const pomodoroTimer = document.getElementById("pomodoro");
const shortBreakTimer = document.getElementById("short-break");
const longBreakTimer = document.getElementById("long-break");

// Pomodoro Timer display and controls
const pomodoroStart = document.getElementById("pomodoro-start");
const pomodoroStop = document.getElementById("pomodoro-stop");
const pomodoroReset = document.getElementById("pomodoro-replay");
const pomodoroMinutes = document.getElementById("pomodoro-minutes");
const pomodoroSeconds = document.getElementById("pomodoro-seconds");


/*
 * Toggle timer display:
 */
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


/*
 * Timer controls and display:
 */
// Update minute and second display
function updateDisplay() {
    pomodoroMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    pomodoroSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                isRunning = false;
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }
        }, 1000);
        isRunning = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    isRunning = false;
    updateDisplay();
}

pomodoroStart.addEventListener("click", startTimer);
pomodoroReset.addEventListener("click", resetTimer);
