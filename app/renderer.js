
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
        if (d.id === 1) {openMenu()}
    });