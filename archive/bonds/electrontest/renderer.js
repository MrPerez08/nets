document.addEventListener('DOMContentLoaded', () => {
    // create an array with nodes
    var nodes = new vis.DataSet([
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
    ]);
  
    // create an array with edges
    var edges = new vis.DataSet([
      { from: 1, to: 3 },
      { from: 1, to: 2 },
    ]);
  
    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    const options = {};
    const network = new vis.Network(container, data, options);
  });