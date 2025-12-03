function BinarySearch(matrix, target) {
    const row = matrix.length
    const col = matrix[0].length

    let start = 0, end = (row*col)-1
    while (start <= end) {
        let mid = Math.floor(start + ((end - start)/2))
        let rowIndex = Math.floor(mid/col)
        let colIndex = Math.floor(mid%col)
        if (matrix[rowIndex][colIndex] === target) {
            return true
        }
        else if (matrix[rowIndex][colIndex] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return false
}


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
const result = BinarySearch(matrix,target)
console.log(result);
