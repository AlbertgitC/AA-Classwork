function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle + 1);

    if (target < array[middle]) {
        return binarySearch(left, target);
    } else if (target > array[middle]) {
        return binarySearch(right, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {

}


module.exports = {
    binarySearch,
    binarySearchIndex
};