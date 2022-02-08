// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


var buildTree = function (preorder, inorder) {
  const getTree = (left = 0, right = preorder.length - 1) => {
    if (left > right) return null;

    const node = preorder.shift();
    const treeNode = new TreeNode(node);
    const index = inorder.indexOf(node);

    treeNode.left = getTree(left, index - 1);
    treeNode.right = getTree(index + 1, right);
    return treeNode;
  };

  return getTree();

};
