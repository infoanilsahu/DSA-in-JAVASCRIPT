function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = minIndex(arr,i)

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp;
    }
}

function minIndex(arr,start) {
    let index = start;
    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] < arr[index]) {
            index = i
        }
    }
    return index
}

function Fist(arr,target) {
    let start = 0
    let end = arr.length-1
    let ans;

    while (start <= end) {
        const mid = Math.floor( start + ( (end - start)/2 ))

        if (arr[mid] === target) {
            ans = mid
            end = mid - 1;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
}

function Last(arr,target) {
    let start = 0
    let end = arr.length-1
    let ans;

    while (start <= end) {
        const mid = Math.floor( start + ( (end - start)/2 ))

        if (arr[mid] === target) {
            ans = mid
            start = mid + 1;
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
}

// const arr = [7,4,8,5,3]
const arr = [4,2,5,4,2,4,6,4]
selection(arr);
console.log(arr);
const target = 5
const first = Fist(arr,target)
console.log("First : ",first+1);
const last =Last(arr,target)
console.log("Last : ",last+1);

const total = (last - first)+1

console.log(`Total ${target} is ${total}`);


