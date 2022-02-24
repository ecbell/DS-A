class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

//Breadth first search 

function breadthFirstSearch(start, targetVal) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    if (node.val === targetVal) return node;
    queue.push(...node.neighbors);
  }

  return null;

}


// depth first search 

