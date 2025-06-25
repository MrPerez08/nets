
function createResponsiveChart() {
    // Clear previous SVG if it exists
    d3.select("#main svg").remove();
    
    // Get container dimensions
    const container = d3.select("#main");
    const width = container.node().getBoundingClientRect().width;
    const height = container.node().getBoundingClientRect().height || 400; // fallback
    
    // Create SVG
    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("pointer-events", "all");
    
    // Set up the simulation
const simulation = d3.forceSimulation(data)
    .force("charge", d3.forceManyBody().strength(-100))
    .force("x", d3.forceX(width / 2))
    .force("y", d3.forceY(height / 2));

// Drag behavior
const drag = d3.drag()
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded);

// Create nodes
const node = svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("r", 10)
    .call(drag);

// Update positions on each tick
simulation.on("tick", () => {
    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
});

// Drag functions
function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}





}


// Wait for DOM to be ready before initializing
document.addEventListener("DOMContentLoaded", function() {
    createResponsiveChart();
    window.addEventListener("resize", createResponsiveChart);
});

