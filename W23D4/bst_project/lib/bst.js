class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root = this.root) {
       if (!this.root) {
           this.root = new TreeNode(val);
           return;
        }
       if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left);
            }
       } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right);
            }
       }
   }

    searchRecur(val, root = this.root) {
        if (!root) return false;
        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        // const queue = [this.root];
        // while (queue.length > 0) {
        //     const current_node = queue.shift();
        //     if (!current_node) return false;
        //     if (current_node.val === val) {
        //         return true;
        //     } else if (current_node.val < val) {
        //         queue.push(current_node.right);
        //     } else {
        //         queue.push(current_node.left);
        //     }
        // }
        let current_node = this.root;
        while(current_node) {
            if (val === current_node.val) {
                return true;
            } else if (val < current_node.val) {
                current_node = current_node.left;
            } else {
                current_node = current_node.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};