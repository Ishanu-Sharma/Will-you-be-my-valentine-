// Function to create and animate floating "LOVE" symbols (❤️)
function createFloatingLoves() {
    const body = document.querySelector('body');
    
    for (let i = 0; i < 10; i++) {  // Create 10 "❤️" symbols at random positions
        const love = document.createElement('div');
        love.classList.add('love');
        love.textContent = '❤️'; // Set the content to the heart emoji
        love.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        love.style.animationDuration = `${Math.random() * 4 + 4}s`; // Random animation duration
        
        body.appendChild(love);

        // Remove the "❤️" symbol after the animation is finished
        love.addEventListener('animationend', () => {
            love.remove();
        });
    }
}

// Call the createFloatingLoves function every 1 second to generate new "❤️" symbols
setInterval(createFloatingLoves, 1000);

// Function to handle the "No" button click
const messages = [
    "Really??",
    "Are you sure for real???",
    "Think once again!!!",
    "Accept please....",
    "Please na my love....",
    "Please accept my proposal cutie!!!",
    "Pleaseeeeeee......",
    "Fine i give up...",
    "Just kidding, say yes please! ❤"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Function to handle the "Yes" button click (redirect to another page)
function handleYesClick() {
    window.location.href = "yes_page.html";
}
