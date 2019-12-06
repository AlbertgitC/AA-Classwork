// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = preorder[0];
  const root_idx = inorder.indexOf(root);
  
  const left = inorder.slice(0, root_idx)
  const right = inorder.slice(root_idx + 1);
  const pre_left = [];
  const pre_right = [];
  preorder.forEach(ele => {
    if (left.includes(ele)) pre_left.push(ele);
    if (right.includes(ele)) pre_right.push(ele);
  });
  const root_node = new TreeNode(root);
  root_node.left = buildTree(pre_left, left);
  root_node.right = buildTree(pre_right, right);
  return root_node;
}
