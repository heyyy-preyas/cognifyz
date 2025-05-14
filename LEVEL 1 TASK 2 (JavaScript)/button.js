// Get the button element by its ID
const colorButton = document.getElementById('colorButton');

// Add a click event listener to the button
colorButton.addEventListener('click', function() {
    // Toggle the 'clicked' class on the button
    colorButton.classList.toggle('clicked');
});
