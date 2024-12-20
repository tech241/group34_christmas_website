//  // Set the target date for Christmas 2024
//  const targetDate = new Date("December 25, 2024 00:00:00").getTime();

//  function updateCountdown() {
//      const now = new Date().getTime(); // Current time
//      const timeLeft = targetDate - now; // Difference in time

//      // Calculate days, hours, minutes, and seconds
//      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//      // Format numbers to always show two digits
//      document.getElementById('days').innerText = String(days).padStart(2, '0');
//      document.getElementById('hours').innerText = String(hours).padStart(2, '0');
//      document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
//      document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

//      // Stop the countdown when the date is reached
//      if (timeLeft < 0) {
//          clearInterval(timerInterval);
//          document.querySelector('.timer').innerHTML = "<h2>🎉 Merry Christmas! 🎉</h2>";
//      }
//  }

//  // Update the countdown every second
//  const timerInterval = setInterval(updateCountdown, 1000);

//  // Run the function immediately
//  updateCountdown();

function createSnow() {
    const container = document.querySelector('.countdown-container');
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = Math.random() * 100 + '%';
    snow.style.animationDuration = Math.random() * 3 + 7 + 's';
    snow.style.opacity = Math.random();
    container.appendChild(snow);

    // Remove snow after animation
    setTimeout(() => {
        snow.remove();
    }, 10000);
}

// Create snow every 500ms
setInterval(createSnow, 500);

// Countdown Timer
function updateCountdown() {
    const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = christmasDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


      // Close popup function
      function closePopup() {
          document.getElementById('overlay').classList.add('hidden');
          document.getElementById('popup').classList.add('hidden');
      }

      // Event listener for close button
      document.getElementById('closeButton').addEventListener('click', closePopup);

   
