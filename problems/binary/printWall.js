/* Question gfg 
Given an array arr[] where each element denotes the length of a board, and an integer k representing the number of painters available. Each painter takes 1 unit of time to paint 1 unit length of a board.

Determine the minimum amount of time required to paint all the boards, under the constraint that each painter can paint only a contiguous sequence of boards (no skipping or splitting allowed).

Examples:

Input: arr[] = [5, 10, 30, 20, 15], k = 3
Output: 35
Explanation: The optimal allocation of boards among 3 painters is - 
Painter 1 → [5, 10] → time = 15
Painter 2 → [30] → time = 30
Painter 3 → [20, 15] → time = 35
Job will be done when all painters finish i.e. at time = max(15, 30, 35) = 35
Input: arr[] = [10, 20, 30, 40], k = 2
Output: 60
Explanation: A valid optimal partition is - 
Painter 1 → [10, 20, 30] → time = 60
Painter 2 → [40] → time = 40
Job will be complete at time = max(60, 40) = 60
Input: arr[] = [100, 200, 300, 400], k = 1
Output: 1000
Explanation: There is only one painter, so the painter must paint all boards sequentially. The total time taken will be the sum of all board lengths, i.e., 100 + 200 + 300 + 400 = 1000.
Constraints:
1 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 104
1 ≤ k ≤ 105

Expected Complexities
Time Complexity: O(n * log(sum(arr)))
Auxiliary Space: O(1)
*/

function Max(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index = i
        }
    }
    return arr[index];
}

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function MinTime(arr,k) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            max = i
        }
    }
    console.log("max : ",max);
    

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("sum : ", sum);
    

    let start = arr[max], end = sum,midMax, ans;

    while (start <= end) {
        midMax = Math.floor(start + ((end - start)/2));
        let wall = 0, lab = 1;
        for (let i = 0; i < arr.length; i++) {
            wall += arr[i]
            if (wall > midMax) {
                wall = arr[i]
                lab++
            }
        }
        console.log(`start : ${start} | end : ${end} | midMax : ${midMax} | wall : ${wall} | lab : ${lab}`);
        
        if (lab <= k) {
            ans = midMax
            end = midMax - 1;
        } else {
            start = midMax + 1;
        }
    }

    return ans;
}


// const arr = [5,10,30,20,15]
// const arr = [5, 10, 30, 20, 15]
// const arr = [10, 20, 30, 40], k = 2
const arr = [100, 200, 300, 400], k = 1
const result = MinTime(arr,k)

console.log(result);
