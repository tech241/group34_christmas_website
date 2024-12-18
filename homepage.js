// Navbar

// Merry Christmas

// Christmas Countdown
// Set the target date for Christmas 2024
const targetDate = new Date("December 25, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime(); // Current time
  const timeLeft = targetDate - now; // Difference in time

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the HTML elements
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // Stop the countdown when the date is reached
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.querySelector('.timer').innerHTML = "<h2>🎉 Merry Christmas! 🎉</h2>";
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Run the function immediately
updateCountdown();