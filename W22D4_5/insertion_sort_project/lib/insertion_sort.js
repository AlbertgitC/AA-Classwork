function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current_el = arr[i];
        for(var j = i - 1; j >= 0 && current_el < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current_el;
    }
    return arr;
}

module.exports = {
    insertionSort
};