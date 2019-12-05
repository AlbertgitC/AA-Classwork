function getMaxDigits(nums) {
    const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    

    var negatives = arr.filter(item => item < 0);
    var negativesSorted = [];
    if (negatives.length > 0) {
        negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
            .reverse()
            .map(item => -item);
    }

    var positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(positives);

    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < positives.length; i++) {
            let digit = getDigitFrom(positives[i], k);
            buckets[digit].push(positives[i]);
        }
        positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives);
}

module.exports = {
    radixSort
};