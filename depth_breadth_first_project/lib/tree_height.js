function treeHeight(root) {
    if (root === null ) return -1;

    let count = 0;

    let queue = [root] 

    while (queue.length) {

        let node = queue.shift();

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        if (node.left || node.right) {
            count += 1;
        }
    }

    return count;
}


module.exports = {
    treeHeight
};