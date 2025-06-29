let isMoved = false
const item2 = document.getElementById('item2');

function openitem2(){
    
    // Force a reflow to ensure CSS is applied before changing width
    item2.offsetWidth;
    
    if (isMoved) {
        // item2 is currently open, so close it
        item2.style.width = '0%';
    } else {
        // item2 is currently closed, so open it
        item2.style.width = '30%';
    }
    isMoved = !isMoved;

    if (!item2._transitionListenerAdded) {
        item2.addEventListener('transitionend', function() {
            window.dispatchEvent(new Event('resize'));
        });
        item2._transitionListenerAdded = true;
    }
}




// Select the SVG container
const svg = d3.select("#graph");

// Sample data - array of objects with x, y coordinates
const nodesData = [
    { id: 1, x: 100, y: 100 },
];

// Create nodes
svg.selectAll(".node")
    .data(nodesData)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20)  // radius
    .attr("cx", d => d.x)  // center x
    .attr("cy", d => d.y) // center y
    .on("click", function(event, d) {
        if (d.id === 1) {openitem2()}
    });