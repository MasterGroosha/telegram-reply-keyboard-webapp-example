// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// Get DOM elements
const numberDisplay = document.getElementById('numberDisplay');
const generateButton = document.getElementById('generateButton');
const notification = document.getElementById('notification');

// Generate random number function
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // 0-99
}

// Button click handler
generateButton.addEventListener('click', () => {
    // Disable button during the process
    generateButton.disabled = true;

    // Generate and display the random number
    const randomNumber = generateRandomNumber();
    numberDisplay.textContent = randomNumber;

    // Show notification
    notification.style.display = 'block';

    // After 3 seconds, send data to Telegram and reset
    setTimeout(() => {
        // Send data to Telegram
        tg.sendData(randomNumber.toString());

        // Reset the UI
        numberDisplay.textContent = '';
        notification.style.display = 'none';
        generateButton.disabled = false;
    }, 3000);
});