function minIndex(nums) {
    let start = 0, end = nums.length-1,mid,ans = 0;

    while (start <= end) {
        mid = Math.floor(start + ((end - start)/2))
        if (nums[mid] >= nums[0]) {
            start = mid + 1
        }
        else{
            end = mid - 1;
            ans = mid;
        }
    }

    return nums[ans]
}

function miniIndex(nums) {
    let start = 0, end = nums.length-1,mid,ans = 0;

    while (start <= end) {
        mid = Math.floor(start + ((end - start)/2))
        if (nums[mid] < nums[mid+1]) {
            end = mid - 1;
            ans = mid;
        }
        else{
            start = mid + 1;
        }
    }

    return nums[ans]
}



// const nums = [3,4,5,1,2]
const nums = [4,5,6,7,0,1,2]
// const nums = [11,13,15,17]
console.log(nums);

const result = miniIndex(nums)
console.log(result);
