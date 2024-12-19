// When the modal is shown, update the profile content
var profileModal = document.getElementById('profileModal');
profileModal.addEventListener('show.bs.modal', function (event) {
    // Get data from the clicked button
    var button = event.relatedTarget;
    var name = button.getAttribute('data-name');
    var age = button.getAttribute('data-age');
    var img = button.getAttribute('data-img');

    // Update modal content
    var modalTitle = profileModal.querySelector('#modal-name');
    var modalAge = profileModal.querySelector('#modal-age');
    var modalImg = profileModal.querySelector('#modal-profile-img');

    modalTitle.textContent = name;
    modalAge.textContent = age;
    modalImg.src = img;
});

window.onload = function () {
    document.body.snowfall({
        flakeCount: 100,    // Number of snowflakes
        flakeColor: '#ffffff', // Snowflake color
        flakeIndex: 9999,  // Layer level (so it's on top)
        minSize: 5,        // Smallest snowflake size
        maxSize: 15,       // Largest snowflake size
    });
};

 // Function to create snowflakes
 function createSnowflakes(numSnowflakes) {
    const snowflakesContainer = document.querySelector('.snowflakes');

    // Loop to create the specified number of snowflakes
    for (let i = 0; i < numSnowflakes; i++) {
        // Create a snowflake element
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake character

        // Set random sizes, animation durations, and horizontal positions
        snowflake.style.fontSize = `${Math.random() * 1.5 + 1}rem`; // Random size between 1rem and 2.5rem
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay for each snowflake
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.top = `${Math.random() * -50}px`; // Start above the screen

        // Add snowflake to the container
        snowflakesContainer.appendChild(snowflake);
    }
}

// Call the function to add 100 snowflakes
createSnowflakes(100);


