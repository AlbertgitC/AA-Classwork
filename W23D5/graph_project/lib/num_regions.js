function numRegions(graph) {
    let visited = new Set();
    let counter = 0;
    for (let node in graph) {
        if (!visited.has(node)) {
            visited.add(node);
            const queue = [graph[node]];
            while (queue.length) {
                let neighbors = queue.shift();
                
                neighbors.forEach(node => {
                    if (!visited.has(node)) {
                        visited.add(node);
                        queue.push(graph[node]);
                    }
                });
            }
            counter += 1;
        }
    }
    
    return counter;
}

module.exports = {
    numRegions
};