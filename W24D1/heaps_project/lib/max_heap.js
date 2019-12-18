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

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let sifted = false;
        while (!sifted && this.getLeftChild(idx)) {
            sifted = true;
            if (!this.array[this.getRightChild(idx)]) {
                if (this.array[idx] < this.array[this.getLeftChild(idx)]) {
                    let temp = this.array[idx];
                    this.array[idx] = this.array[this.getLeftChild(idx)];
                    this.array[this.getLeftChild(idx)] = temp;
                }
                continue;
            }

            if (this.array[this.getLeftChild(idx)] >= this.array[this.getRightChild(idx)] && this.array[idx] < this.array[this.getLeftChild(idx)]) {
                let temp = this.array[idx];
                this.array[idx] = this.array[this.getLeftChild(idx)];
                this.array[this.getLeftChild(idx)] = temp;
                sifted = false;
                this.siftDown(this.getLeftChild(idx));
            } else if (this.array[this.getLeftChild(idx)] < this.array[this.getRightChild(idx)] && this.array[idx] < this.array[this.getRightChild(idx)]) {
                let temp = this.array[idx];
                this.array[idx] = this.array[this.getRightChild(idx)];
                this.array[this.getRightChild(idx)] = temp;
                sifted = false;
                this.siftDown(this.getRightChild(idx));
            }
        }
    }
}

module.exports = {
    MaxHeap
};