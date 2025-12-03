const arr = [7,4,8,5,3]

console.log(arr);

let niw;


function minIndex(arr,i) {
    let index = i
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[index]) {
            index = j
        }
    }
    return index
}

function swap(arr,a,b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}



// for (let i = 0; i < arr.length; i++) {
//     let index = i
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[j] < arr[index]) {
//             index = j
//         }
//     }
//     // console.log(index);
    
//     swap(arr,i,index)
//     // niw = arr[i]
//     // arr[i] = arr[index]
//     // arr[index] = niw


// }


for (let i = 0; i < arr.length; i++) {
    let index = minIndex(arr,i)
    swap(arr,i,index)
}




console.log(arr);
