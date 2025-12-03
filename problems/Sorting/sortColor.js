/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 */

function sortColor(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 0; j < nums.length-i; j++) {
            if (nums[j] > nums[j+1]) {
                let k = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = k
            }
            
        }
        
    }
}

const nums = [2,0,2,1,1,0]
// const nums = [7,4,5,8,3,1]
sortColor(nums)
console.log(nums);
