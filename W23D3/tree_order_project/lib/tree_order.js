function inOrderArray(root) {
    if (!root) return [];
    
    const arr = [].concat(inOrderArray(root.left)).concat([root.val]).concat(inOrderArray(root.right));
    return arr;
}

function postOrderArray(root) {
    if (!root) return [];

    const arr = [].concat(postOrderArray(root.left)).concat(postOrderArray(root.right)).concat([root.val]);
    return arr;
}


module.exports = {
    inOrderArray,
    postOrderArray
};