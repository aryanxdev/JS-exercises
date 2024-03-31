// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
let nums = [0, 1, 0, 3,12,4];
let temp; let c = 1;
let a = [];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//         a.push(nums[i]);
//         delete(nums[i]);
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//         a.push(nums[i]);
//         delete(nums[i]);
//     }
// }
// console.log(nums,a);


let nonZeroIdx=0;
for(let i = 0; i < nums.length; i++)
{
    if(nums[i]!==0)
    {
        nums[nonZeroIdx]=nums[i];
        nonZeroIdx++;
    }
}
while(nonZeroIdx<nums.length)
{
    nums[nonZeroIdx++]=0;
}

console.log(nums);