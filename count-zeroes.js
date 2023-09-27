function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Special cases
    if (arr[0] === 0) return arr.length;
    if (arr[right] === 1) return 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === 1) {
            // This means the first 0 is on the right side of mid
            left = mid + 1;
        } else if (arr[mid] === 0 && arr[mid - 1] === 1) {
            // This means mid is the first occurrence of 0
            return arr.length - mid;
        } else {
            // This means the first 0 is on the left side of mid
            right = mid - 1;
        }
    }

    return 0; // If all elements are 1s
}

module.exports = countZeroes