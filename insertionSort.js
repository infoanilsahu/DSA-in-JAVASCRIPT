const arr = [7,4,2,3,5]
console.log(arr);

for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
        if (arr[j-1] > arr[j]) {
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
        } else {
            break
        }
        
    }
    
}

console.log(arr);

