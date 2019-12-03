// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const new_node = new Node(val);

        if (!this.head) {
            this.head = new_node;
        } else {
            this.tail.next = new_node;
        }

        this.tail = new_node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            const old_tail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return old_tail;
        }

        let current_node = this.head;
        let new_tail = current_node;
        while(current_node.next) {
            new_tail = current_node;
            current_node = current_node.next;
        }

        this.tail = new_tail;
        this.tail.next = null;
        this.length--;
        return current_node;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const new_node = new Node(val);

        if (!this.head) {
            this.tail = new_node;
        } else {
            new_node.next = this.head;
        }

        this.head = new_node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        let old_head = this.head;
        let new_head = this.head.next;
        this.length--;
        this.head = new_head;
        if (!new_head) this.tail = new_head;
        return old_head;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.head) return false;
        let current_node = this.head;
        while(current_node) {
            if (current_node.value === target) return true;
            current_node = current_node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (!this.head) return null;
        let current_node = this.head;
        if (index < this.length && index >= 0) {
            for (let i = 0; i < index; i++) {
                current_node = current_node.next;
            }

            return current_node;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
