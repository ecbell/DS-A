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

// in order
function inOrderPrint(root) {
  console.log(root.val);
  inOrderPrint(root.left);
  inOrderPrint(root.right);
}


//post order
//- print all nodes in the left subtree
//- print all nodes in the right subtree
//  - print root
function postOrderPrint(root) {
  if (!root) return;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}


// pre order
function preOrderPrint(root) {
  if (!root) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}


function depthFirst(root) {
  let stack = [root];

  while (stack.length) {
    let node = stack.pop;

    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}