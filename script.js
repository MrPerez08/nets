const data = {
  nodes: [
    { id: "A", name: "Note A" },
    { id: "B", name: "Note B" },
    { id: "C", name: "Note C" },
  ],
  links: [
    { source: "A", target: "B" }, // Connection between A and B
    { source: "B", target: "C" }, // Connection between B and C
  ],
};

const width = 800, height = 600;

// Create SVG container
const svg = d3.select("#graph")
  .attr("width", width)
  .attr("height", height);

// Create a group for zoom/pan
const g = svg.append("g");

// Initialize forces
const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
  .force("charge", d3.forceManyBody().strength(-300)) // Negative = repulsion
  .force("center", d3.forceCenter(width / 2, height / 2)); // Center the graph


// Draw links (edges)
const link = g.append("g")
  .selectAll("line")
  .data(data.links)
  .join("line")
  .attr("class", "link");

// Draw nodes
const node = g.append("g")
  .selectAll("circle")
  .data(data.nodes)
  .join("circle")
  .attr("class", "node")
  .attr("r", 10)
  .call(drag(simulation)); // Enable dragging (see Step 5)

// Add labels
node.append("title").text(d => d.name); // Tooltip on hover


function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

svg.call(d3.zoom()
  .scaleExtent([0.1, 5])
  .on("zoom", (event) => g.attr("transform", event.transform)));

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);
  node
    .attr("cx", d => d.x)
    .attr("cy", d => d.y);
});