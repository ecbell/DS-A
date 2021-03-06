// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("../../tree_order_project/lib/tree_node");


function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let midIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[midIdx]);
  let leftSubTree = sortedArrayToBST(nums.slice(0, midIdx));
  let rightSubTree = sortedArrayToBST(nums.slice(midIdx + 1));
  root.left = leftSubTree;
  root.right = rightSubTree;

  return root; 

}