class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        const first_char = word[0];

        if (!(first_char in root.children)) {
            root.children[first_char] = new Node();
        }

        if (word.length === 1) {
            root.children[first_char].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[first_char]);
        }
        
    }
}

module.exports = {
    Node,
    Trie
};