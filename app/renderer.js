
let originalPos =[];


function createCircle(svg, width, height) {
    const circle = svg.append("circle")
        .attr("id", "node")
        .attr("cx", width/2)
        .attr("cy", height/2)
        .attr("r", 30)
        .attr("fill", "steelblue")
        .style("transform-origin", "center")
        .call(d3.drag()
            .on("drag", function(event) {
                d3.select(this)
                    .attr("cx", event.x)
                    .attr("cy", event.y);
                    originalPos[0] = event.x;
                    originalPos[1] = event.y;
            }))
        .on("click", function(event) {
            event.stopPropagation();
            openMenu();
            shiftNode(this);
        })
        .append("title")
        .text("This is a single node");
        originalPos = [width/2, height/2];
}

function shiftNode(node) {
    const menu = document.getElementById('menu');
    const menuWidth = parseFloat(getComputedStyle(menu).width);
    const mainWidth = parseFloat(getComputedStyle(document.getElementById('main')).width);
    
    if (isNodeShifted) {
        // Return to original position
        d3.select(node)
            .style("transform", "translateX(0)");
    } else {
        // Calculate shift amount (30% of window width is the menu width)
        const shiftAmount = -0.15 * mainWidth; // Adjust this value as needed
        d3.select(node)
            .style("transform", `translateX(${shiftAmount}px)`);
    }
    isNodeShifted = !isNodeShifted;
}

/*
function createCircle(svg,width,height){
    svg.append("circle")
        .attr("id", "node")
        .attr("cx", width / 2) // Center X
        .attr("cy", height / 2) // Center Y
        .attr("r", 30) // Radius
        .attr("fill", "steelblue")
        .style("pointer-events", "visible") // Allow clicks
        .on("click", function(event){
            event.stopPropagation();
            openMenu();
        })
        .append("title") // Tooltip
        .text("This is a single node");
}
*/

function createResponsiveChart() {
    // Clear previous SVG if it exists
    d3.select("#main svg").remove();
    
    // Get container dimensions
    const container = d3.select("#main");
    const width = container.node().getBoundingClientRect().width;
    const height = container.node().getBoundingClientRect().height || 400;
    
    // Create SVG
    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("pointer-events", "all");
    
    createCircle(svg, width, height);
}

// Wait for DOM to be ready before initializing
document.addEventListener("DOMContentLoaded", function() {
    createResponsiveChart();
    window.addEventListener("resize", createResponsiveChart);
});






