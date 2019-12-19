// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    const left_idx = idx * 2;
    const right_idx = idx * 2 + 1;
    let left_val = array[left_idx];
    let right_val = array[right_idx];
    if (right_val === undefined) right_val = -Infinity;
    if (left_val === undefined) return true;
    if (array[idx] > left_val && array[idx] > right_val) {
        if (isMaxHeap(array, left_idx) && isMaxHeap(array, right_idx)) return true;
        return false;
    }

    return false;
}


module.exports = {
    isMaxHeap
};