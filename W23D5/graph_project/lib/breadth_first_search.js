

function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    const queue = [startingNode];
    while (queue.length) {
        let current_node = queue.shift();
        visited.add(current_node);
        if (current_node.val === targetVal) {
            return current_node;
        } else {
            current_node.neighbors.forEach(node => {
                if (!visited.has(node)) {
                    queue.push(node);
                }
            });
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};