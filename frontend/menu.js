let isMoved = false
const menu = document.getElementById('menu');
let nodex, nodey;

function updateNodePosition() {
    nodex = window.innerWidth / 2;
    nodey = window.innerHeight / 2;
}


function openMenu(d) {
    updateNodePosition();
    const noded3 = d3.select(".node");
    
    if (isMoved) {
        // Close menu
        menu.style.width = '0%';
        noded3.transition()
            .duration(500)
            .attr("cx", nodex)
            .attr("cy", nodey);
        d.x = nodex;
        d.y = nodey;
    } else {
        // Open menu
        menu.style.width = '30%';
        const newX = window.innerWidth * 0.7 / 2;
        noded3.transition()
            .duration(500)
            .attr("cx", newX)
            .attr("cy", nodey);
        d.x = newX;
        d.y = nodey;
    }
    isMoved = !isMoved;
}

// Initialize positions
updateNodePosition();