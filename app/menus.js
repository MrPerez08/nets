let isMoved = false
const menu = document.getElementById('menu');


nodex = window.innerWidth/2
nodey = window.innerHeight/2


function openMenu(d){
    const noded3 = d3.select(".node");
    // Force a reflow to ensure CSS is applied before changing width
    menu.offsetWidth;
    
    if (isMoved) {
        // Menu is currently open, so close it
        menu.style.width = '0%';
        noded3.transition()
            .duration(500)  // Animation duration in milliseconds
            .attr("cx", nodex)
            .attr("cy", nodey);
        d.x=window.innerWidth/2
        d.y=window.innerHeight/2
    } else {
        // Menu is currently closed, so open it
        menu.style.width = '30%';
        noded3.transition()
            .duration(500)  // Animation duration in milliseconds
            .attr("cx", nodex*.7)
            .attr("cy", nodey);
        d.x=window.innerWidth*.7/2
        d.y=window.innerHeight/2
    }
    isMoved = !isMoved;

    

    if (!menu._transitionListenerAdded) {
        menu.addEventListener('transitionend', function() {
            window.dispatchEvent(new Event('resize'));
        });
        menu._transitionListenerAdded = true;
    }



}