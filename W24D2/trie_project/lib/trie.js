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

    wordsWithPrefix(prefix, node = this.root) {
        if (prefix.length === 0) {
            const allWords = [];

            if (node.isTerminal) {
                allWords.push("");
            };

            for (let char in node.children) {
                let child = node.children[char];
                let suffixes = this.wordsWithPrefix(prefix, child);
                const words = suffixes.map(suffix => {
                    return char + suffix;
                });
                allWords.push(...words);
            };

            return allWords;
        } else {
            const firstChar = prefix[0];
            const child = node.children[firstChar];
            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
                const words = suffixes.map(suffix => {
                    return firstChar + suffix;
                });
                return words;
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};