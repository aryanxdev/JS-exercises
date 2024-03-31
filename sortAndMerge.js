// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

let merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b); //a and b are two arguements which we can give to the sort function, (a-b) gives 1 if a>b, -1 if a<b and 0 if a===b

    // A-B SE ASCENDING MEIN SORT HOTA AND B-A SE DESCENDING

    return nums1;
};

console.log(merge([1,2,3],3,[2,5,6],3));