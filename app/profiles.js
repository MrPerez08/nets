let isMoved = false
let isNodeShifted = false // Add this variable that was missing

function openMenu(){
    const menu = document.getElementById('menu');
    
    // Force a reflow to ensure CSS is applied before changing width
    menu.offsetWidth;
    
    if (isMoved) {
        // Menu is currently open, so close it
        menu.style.width = '0';
    } else {
        // Menu is currently closed, so open it
        menu.style.width = '30%';
    }
    isMoved = !isMoved;

    if (!menu._transitionListenerAdded) {
        menu.addEventListener('transitionend', function() {
            window.dispatchEvent(new Event('resize'));
        });
        menu._transitionListenerAdded = true;
    }
}