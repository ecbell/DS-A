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

function depthFirstSearch(start, targetVal) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);

    if (node.val === targetVal) return node;
    stack.push(...node.neighbors);
  }
}

// dfs with adjacency list 

function depthFirst(graph) {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

function _depthFirstRecur(node, graph, visited) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

////////////////////////////////////////////////////////////////////
//binary trees and binary search trees

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

