const arr = [7,4,2,3,5]
console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < (arr.length)-i; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
        
//     }
    
// }

function Bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length)-i; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
    }
    
}
}

Bubble(arr)

console.log(arr);

const array = [10,56,4,2,65,87,43,69]
console.log(array);
Bubble(array)
console.log(array);

