// Global variables to track dimensions
let width, height;

function initializeDimensions() {
    width = window.innerWidth;
    height = window.innerHeight;
    nodex = width / 2;
    nodey = height / 2;
}

function updateVisualization() {
    // Update SVG dimensions
    svg.attr("width", width)
       .attr("height", height);
    
    // Update node positions if menu is open
    if (isMoved) {
        nodesData[0].x = width * 0.7 / 2;
        nodesData[0].y = height / 2;
    } else {
        nodesData[0].x = width / 2;
        nodesData[0].y = height / 2;
    }
    
    // Update all nodes
    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
}

window.onload = function() {
    initializeDimensions();
    
    const splash = document.getElementById("splash-screen");
    const mainPage = document.getElementById("mainwindow");

    // Set initial SVG dimensions
    svg.attr("width", width)
       .attr("height", height);

    // Fade out splash after 3 seconds
    setTimeout(() => {
        splash.classList.add("fade-out");
                
        // Remove splash screen after fade completes
        setTimeout(() => {splash.style.display = "none";}, 1000);
    }, 3000);
};

// Select the SVG container
const svg = d3.select("#graph");

// Sample data - array of objects with x, y coordinates
const nodesData = [
    { id: 1, x: window.innerWidth/2, y: window.innerHeight/2 },
];

const drag = d3.drag()
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded);

// Create nodes
const node = svg.selectAll(".node")
    .data(nodesData)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .on("click", function(event, d) {
        if (d.id === 1) { openMenu(d) }
    })
    .call(drag);

function dragStarted(event, d) {
    d3.select(this).raise().attr("stroke", "black");
}

function dragged(event, d) {
    d.x = event.x;
    d.y = event.y;
    d3.select(this)
        .attr("cx", d.x)
        .attr("cy", d.y);
}

function dragEnded(event, d) {
    d3.select(this).attr("stroke", null);
}

// Handle window resize
window.addEventListener('resize', function() {
    initializeDimensions();
    updateVisualization();
});