function numRegions(graph) {
    let visited = new Set();
    let regions = 0;

    for (let node in graph) {
        if (_depthFirstRecur(node, graph, visited)) regions++;
    }

    return regions;
}

function _depthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return false;

    visited.add(node);

    graph[node].forEach(neighbor => {
        _depthFirstRecur(neighbor, graph, visited);
    });

    return true;
}

module.exports = {
    numRegions
};