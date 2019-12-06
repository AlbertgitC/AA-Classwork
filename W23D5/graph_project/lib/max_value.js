function maxValue(node, visited=new Set()) {
    let max_val = node.val;
    const queue = [node];
    while (queue.length) {
        let current_node = queue.shift();
        visited.add(current_node);
        if (current_node.val > max_val) {
            max_val = current_node.val;
            current_node.neighbors.forEach(node => {
                if (!visited.has(node)) {
                    queue.push(node);
                }
            });
        } else {
            current_node.neighbors.forEach(node => {
                if (!visited.has(node)) {
                    queue.push(node);
                }
            });
        }
    }
    return max_val;
}

module.exports = {
    maxValue
};