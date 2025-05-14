// Get the input elements and button by their IDs
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const resultDisplay = document.getElementById('result');

// Add an event listener to the button for the click event
addButton.addEventListener('click', function() {
    // Get the values of the inputs and convert them to numbers
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Check if both inputs are numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum of the numbers
        const sum = num1 + num2;

        // Display the result in the paragraph element
        resultDisplay.textContent = `The result is: ${sum}`;
    } else {
        // Display an error message if the inputs are not valid numbers
        resultDisplay.textContent = 'Please enter valid numbers.';
    }
});
