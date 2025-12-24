function sortArray(nums) {
    const start = 0
    const end  = nums.length-1
    return Merge(nums,start,end)
};

function Merge(arr, start, end) {
    if(start >= end) return ;
    else{
        const mid = Math.floor(start + ((end - start)/2));
        Merge(arr,start,mid)
        Merge(arr,mid+1,end)
        const temp = []
        temp.length = end - start + 1
        let left = start, right = mid+1, index = 0;
        while(left <= mid && right <= end) {
            if(arr[left] <= arr[right]) {
                temp[index] = arr[left]
                left++
                index++
            }
            else{
                temp[index] = arr[right]
                right++
                index++
            }
        }

        while(left <= mid) {
            temp[index] = arr[left] 
            index++
            left++
        }

        while(right <= end) {
            temp[index] = arr[right] 
            index++
            right++
        }
        return temp
    }
}

const nums = [5,2,3,1]
console.log(sortArray(nums));
