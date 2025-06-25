
function createCircle(svg, width, height) {
    const circle = svg.append("circle")
        .attr("id", "node")
        .attr("cx", width/2)
        .attr("cy", height/2)
        .attr("r", 30)
        .attr("fill", "steelblue")
        .call(d3.drag()
            .on("drag", function(event) {
                d3.select(this)
                    .attr("cx", event.x)
                    .attr("cy", event.y);
            }))
        .on("click", function(event) {
            event.stopPropagation();
            openMenu();
        })
        .append("title")
        .text("This is a single node");
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






