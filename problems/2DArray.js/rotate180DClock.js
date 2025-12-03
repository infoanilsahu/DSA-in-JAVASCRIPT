function rotateMatrix(mat) {
    const row = mat.length
    const col = mat[0].length
    if (row !== col) {
        return -1;
    }

    for (let i = 0; i < col; i++) {
        let start = 0, end = row-1
        while (start < end) {
            let store = mat[start][i]
            mat[start][i] = mat[end][i]
            mat[end][i] = store
            start++
            end--
        }
        
    }

    for (let i = 0; i < row; i++) {
        let start = 0, end = col-1
        while (start < end) {
            let store = mat[i][start]
            mat[i][start] = mat[i][end]
            mat[i][end] = store
            start++
            end--
        }
    }
    
}


const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(arr);

rotateMatrix(arr)

console.log(arr);
