function inver(arr, start, end) {
    if (start >= end) return 0;

    let count = 0;
    const mid = Math.floor(start + (end - start) / 2);

    count += inver(arr, start, mid);
    count += inver(arr, mid + 1, end);

    const temp = new Array(end - start + 1);
    let index = 0;

    let one = start;
    let two = mid + 1;

    while (one <= mid && two <= end) {
        if (arr[one] <= arr[two]) {
            temp[index++] = arr[one++];
        } else {
            temp[index++] = arr[two++];
            count += (mid - one + 1);
        }
    }

    while (one <= mid) {
        temp[index++] = arr[one++];
    }

    while (two <= end) {
        temp[index++] = arr[two++];
    }

    index = 0;
    for (let i = start; i <= end; i++) {
        arr[i] = temp[index++];
    }

    return count;
}

class Solution {
    inversionCount(arr) {
        return inver(arr, 0, arr.length - 1);
    }
}