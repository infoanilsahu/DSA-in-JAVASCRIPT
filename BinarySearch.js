


function Bubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length)-i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
            
        }
        
    }
}

function BiarySearch(array,find) {
    let start = 0;
    let end = array.length-1;

    
    while (start <= end) {

        let mid = Math.floor( (start + end)/2);

        if (array[mid] === find) {
            return mid;
        }
        else if (array[mid] > find) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

const arr = [7,4,8,5,3]

Bubble(arr)




const key = BiarySearch(arr,3)

console.log(arr);
console.log(`Number is found on position : ${key +1}`);
