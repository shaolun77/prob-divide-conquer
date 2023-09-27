function findRotationCount(arr) {
    if (arr.length === 0) return 0;
    if (arr[0] < arr[arr.length - 1]) return 0;  // The array is not rotated

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if mid is the smallest element
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // Decide which half to continue the search on
        if (arr[start] <= arr[mid]) {  // Left half is sorted, so pivot must be in right half
            start = mid + 1;
        } else {  // Pivot must be in the left half
            end = mid - 1;
        }
    }

    return 0; // Default case if the function doesn't find the rotation (shouldn't be hit with the given constraints)
}


module.exports = findRotatedIndex