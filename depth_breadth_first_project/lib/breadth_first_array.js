function breadthFirstArray(root) {
    let queue = [ root ];
    let resultsArr = [];

    while (queue.length) {
        let node = queue.shift();

        resultsArr.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return resultsArr;
}

module.exports = {
    breadthFirstArray
};