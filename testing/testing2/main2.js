// Get the elements
const button = document.getElementById('moveDiv');
const div = document.getElementById('item2');

let isMoved = false;

button.addEventListener('click', function() {
  if (isMoved) {
    // Move back to original position
    div.style.width = '30%';
  } else {
    // Move to new position (e.g., 200px to the right)
    div.style.width = '0';
  }
  
  isMoved = !isMoved; // Toggle the state
});