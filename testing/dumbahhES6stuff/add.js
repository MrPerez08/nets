// Named export for the button click handler
export const handleButtonClick = () => {
    const output = document.getElementById('output');
    output.textContent = 'Button clicked!';
    output.style.color = 'green';
    
    console.log('Button action executed from add.js');
    
    // You can return something if needed
    return 'Action completed';
};

// You can export multiple functions if needed
export const secondaryAction = () => {
    console.log('Secondary action');
};