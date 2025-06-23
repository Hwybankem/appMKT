document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');

    if (messageElement) {
        setTimeout(() => {
            messageElement.textContent = 'JavaScript has updated this message successfully!';
            console.log('Message updated by script.js');
        }, 2000); // Update after 2 seconds
    } else {
        console.error('Element with ID "message" not found.');
    }
});

// A simple function to demonstrate JS linting
function addTwoNumbers(a, b) {
    return a + b; // Example of a simple function
}

console.log(addTwoNumbers(5, 3));