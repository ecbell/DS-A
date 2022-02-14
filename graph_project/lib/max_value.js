function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let allValues = node.neighbors.map(neighbor => maxValue(neighbor, visited));
    return Math.max(node.val, ...allValues)


}

module.exports = {
    maxValue
};