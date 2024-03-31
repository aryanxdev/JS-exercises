// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let removeDuplicates=(arr)=>{
    let a=[];
    let counter=0;
    for(let i=0;i<arr.length;i++)
    {
        let as=arr[i];
        if(!(as in a))
        {
            // console.log(1)
            a.push(as);
        }
        else{
            a.push('_');
        }
    }
    // for(let i=0;i<a.length;i++)
    // {
    //     if(a[i]!=='_')
    //     {
    //         counter++;
    //     }
    // }
    return a;
}

function removeDuplicates2(nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a,b)=>a-b);

    // Initialize the count of unique elements to 1
    let k=1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }
    nums.length=k;
    return nums;
}

console.log(removeDuplicates2([1,1,2,2,3,3,4,4,5,5]));
console.log(removeDuplicates2([1,2,3,4,5,1,2,3,4,5]));