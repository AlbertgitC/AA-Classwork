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
        let sifted = false;
        while(!sifted && this.getParent(idx)) {
            sifted = true;
            if (this.array[idx] > this.array[this.getParent(idx)]) {
                let temp = this.array[idx];
                this.array[idx] = this.array[this.getParent(idx)];
                this.array[this.getParent(idx)] = temp;
                sifted = false;
                this.siftUp(this.getParent(idx));
            }
        }
    }
}

module.exports = {
    MaxHeap
};