// Get references to modals (place this at the top of the script to avoid errors)
const buyGiftModal = new bootstrap.Modal(document.getElementById('buyGiftModal'));
const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
const profileModal = document.getElementById('profileModal');

// Ensure modals open when triggered
const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    const targetModal = document.querySelector(trigger.getAttribute('data-bs-target'));
    if (targetModal) {
      const modal = new bootstrap.Modal(targetModal);
      modal.show();
    }
  });
});

// When the profile modal is shown, update content dynamically
profileModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const name = button.getAttribute('data-name');
    const age = button.getAttribute('data-age');
    const img = button.getAttribute('data-img');

    const modalTitle = profileModal.querySelector('#modal-name');
    const modalAge = profileModal.querySelector('#modal-age');
    const modalImg = profileModal.querySelector('#modal-profile-img');

    modalTitle.textContent = name;
    modalAge.textContent = age;
    modalImg.src = img;
});

// Handle the letter form submission (corrected to avoid duplication)
document.getElementById('letterForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting normally

    const letterContent = document.getElementById('letter').value;

    if (letterContent.trim() === '') {
        alert('Please write a message before submitting.');
        return;
    }

    thankYouModal.show();
    buyGiftModal.hide();
    // Optionally, process the letter or submit it to a server here
});

// Function to create snowflakes
function createSnowflakes(numSnowflakes) {
    const snowflakesContainer = document.querySelector('.snowflakes');
    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake character

        // Randomize snowflake size and animation timing
        const size = Math.random() * 1.5 + 1; // Random size between 1rem and 2.5rem
        snowflake.style.fontSize = `${size}rem`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random fall duration between 5 and 10 seconds
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay to make the falling appear natural

        // Position the snowflakes randomly across the screen
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.top = `${Math.random() * -50}px`; // Start above the screen

        snowflakesContainer.appendChild(snowflake);
    }
}

// Call to add 100 snowflakes when the page loads
window.onload = function () {
    createSnowflakes(100); // Number of snowflakes
};

// Handle the "Send Gift" action
document.getElementById('sendGiftButton').addEventListener('click', function () {
    // Get the child ID and update the gift count
    const childId = profileModal.querySelector('#modal-name').textContent;  // Assuming child name is used as ID here
    if (childrenGifts[childId] < maxGiftsPerChild) {
        childrenGifts[childId]++;

        // Close the modal after sending the gift
        buyGiftModal.hide();

        // Update the UI or refresh the gift count
        alert('Gift sent successfully!');
    }
});
