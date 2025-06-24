const width = 800, height = 600;

// Select SVG and set dimensions
const svg = d3.select("#graph")
  .attr("width", width)
  .attr("height", height);

function showMenu(){
    d3.select("#menu").classed("visible", true);
}



  // Create a single node
svg.append("circle")
    .attr("id", "node")
    .attr("cx", width / 2) // Center X
    .attr("cy", height / 2) // Center Y
    .attr("r", 30) // Radius
    .append("title") // Tooltip
    .text("This is a single node")
    .on("click", function(event){
        showMenu();
    });




