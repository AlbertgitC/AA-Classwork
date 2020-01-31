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

    insertIter(word) {
        const chars = word.split("");
        let root = this.root;
        chars.forEach((char, i) => {
            if (!(char in root.children)) {
                root.children[char] = new Node();
            }

            if (i === word.length - 1) {
                root.children[char].isTerminal = true;
            }

            root = root.children[char];
        });
    }

    searchRecur(word, node = this.root) {
        if (!(word[0] in node.children)) {
            return false;
        } else if (word.length === 1 && node.children[word[0]].isTerminal) {
            return true;
        } else {
            return this.searchRecur(word.slice(1), node.children[word[0]]);
        };
    }

    searchIter(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in node.children)) {
                return false;
            }
            
            if (i === word.length - 1 && node.children[word[i]].isTerminal) {
                return true;
            };

            node = node.children[word[i]];
        };
        return false;
    };
}

module.exports = {
    Node,
    Trie
};