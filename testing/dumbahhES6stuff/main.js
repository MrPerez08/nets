// Import the function from add.js
import { handleButtonClick } from './add.js';

// Set up the event listener
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', () => {
        // Call the imported function
        const result = handleButtonClick();
        console.log(result); // Logs "Action completed"
        
        // You can add additional main.js specific logic here
        button.textContent = 'Clicked!';
    });
});