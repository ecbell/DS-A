function treeSum(root) {
    if (root === null) return 0;

    let count = 0;
    let queue = [root];

    while (queue.length) {

        let node = queue.shift();

        count += node.val;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }


    return count;
}


module.exports = {
    treeSum
};