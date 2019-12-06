function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;
    
    if (depthFirstSearch(root.left, targetVal)) return depthFirstSearch(root.left, targetVal);
    return depthFirstSearch(root.right, targetVal);
}


module.exports = {
    depthFirstSearch
};