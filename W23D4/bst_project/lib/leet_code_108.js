// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  const mid_idx = Math.floor(nums.length / 2);
  const root_node = new TreeNode(nums[mid_idx]);
  const left_tree = sortedArrayToBST(nums.slice(0, mid_idx));
  const right_tree = sortedArrayToBST(nums.slice(mid_idx + 1));
  root_node.left = left_tree;
  root_node.right = right_tree;
  return root_node;
}