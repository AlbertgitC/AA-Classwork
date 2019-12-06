function treeHeight(root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;
    let edges = 0;
    if (treeHeight(root.left) >= treeHeight(root.right)) {
        edges += treeHeight(root.left) + 1;
    } else {
        edges += treeHeight(root.right) + 1;
    }
    return edges;
}


module.exports = {
    treeHeight
};