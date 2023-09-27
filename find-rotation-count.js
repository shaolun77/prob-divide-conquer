function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) return mid;

        // Left half is sorted
        if (arr[start] <= arr[mid]) {
            if (num >= arr[start] && num < arr[mid]) {
                end = mid - 1;  // search in the left half
            } else {
                start = mid + 1;  // search in the right half
            }
        }
        // Right half is sorted
        else {
            if (num > arr[mid] && num <= arr[end]) {
                start = mid + 1;  // search in the right half
            } else {
                end = mid - 1;  // search in the left half
            }
        }
    }

    return -1;  // not found
}

module.exports = findRotationCount