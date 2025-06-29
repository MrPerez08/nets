window.onload = function() {
    const splash = document.getElementById("splash-screen");
    const mainPage = document.getElementById("mainwindow");

    // Fade out splash after 3 seconds
    setTimeout(() => {
        splash.classList.add("fade-out");
                
        // Remove splash screen after fade completes
        setTimeout(() => {splash.style.display = "none";}, 1000); // Matches CSS transition time (1s)
    }, 3000); // Show splash for 3 seconds
};


// Select the SVG container
const svg = d3.select("#graph");

// Sample data - array of objects with x, y coordinates
const nodesData = [
    { id: 1, x: 100, y: 100 },
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
    .attr("r", 20)  // radius
    .attr("cx", d => d.x)  // center x
    .attr("cy", d => d.y) // center y
    .on("click", function(event, d) {
        if (d.id === 1) {openMenu(d)}
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