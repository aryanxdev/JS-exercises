// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Explanation: [9,4] is also accepted.

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
let intersection = [];
// for(let i=0;i<nums1.length;i++)
// {
//     if(nums1[i] in nums2 &&( ))
//     {
//         intersection.push(nums1[i]);
//     }
// }
function intersect(nums1, nums2) {
    const counts = {};
    const result = [];

    nums1.forEach(el => counts[el] = ++counts[el] || 1);

    for (let el of nums2) {
        if (counts[el]) {
            result.push(el);
            counts[el]--;
        }
    }

    return result;
};
console.log(intersect(nums2, nums1));