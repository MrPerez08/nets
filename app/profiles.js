
let isMoved = false

function openMenu(){
    const menu = document.getElementById('menu');
    
    if (isMoved) {
        menu.style.width = '30%';
    } else {
        menu.style.width = '0';
    }
    isMoved = !isMoved;


    if (!menu._transitionListenerAdded) {
        menu.addEventListener('transitionend', function() {
            window.dispatchEvent(new Event('resize'));
        });
        menu._transitionListenerAdded = true;
    }
}