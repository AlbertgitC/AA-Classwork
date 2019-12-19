class MaxHeap {
    constructor() {
        this.array = [null];
    }


    getParent(idx) {
        return Math.floor(idx / 2);
    }


    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        if (this.array[idx] > this.array[this.getParent(idx)]) {
            let temp = this.array[idx];
            this.array[idx] = this.array[this.getParent(idx)];
            this.array[this.getParent(idx)] = temp;
            this.siftUp(this.getParent(idx));
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        const left_idx = this.getLeftChild(idx);
        const right_idx = this.getRightChild(idx);
        let left_val = this.array[left_idx];
        let right_val = this.array[right_idx];
        if (left_val === undefined) left_val = -Infinity;
        if (right_val === undefined) right_val = -Infinity;

        if (this.array[idx] > left_val && this.array[idx] > right_val) return;

        let swap_idx;
        if (right_val < left_val) {
            swap_idx = left_idx;
        } else {
            swap_idx = right_idx;
        }

        [this.array[idx], this.array[swap_idx]] = [this.array[swap_idx], this.array[idx]];
        this.siftDown(swap_idx);
    }

    deleteMax() {
        if (!this.array[1]) return null;
        if (this.array.length === 2) {
            const ele = this.array.pop();
            return ele;
        }

    }
}

module.exports = {
    MaxHeap
};