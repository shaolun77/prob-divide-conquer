function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) return x;

        if (arr[mid] < x) {
            result = arr[mid];  // Update the result when found a new potential floor
            start = mid + 1;   // Move right
        } else {
            end = mid - 1;     // Move left
        }
    }

    return result;
}

module.exports = findFloor