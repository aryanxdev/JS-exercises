// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


//gaussian sum hamesha ek arithmetic progression mein hota hai
// expected sum of the array a =6 cause there are 3 numbers so the range is from 1 to 3 and the sum of 1+2+3 is 6
//guassian sum of 1,2,3 will be 6
let d = (a) => {
    let n=a.length;
    let guassianSum=(n*(n+1))/2;
    let expectedsum=a.reduce((sum,num)=>sum+num,0);
    return guassianSum-expectedsum;
}

let a = [3, 0, 1];
console.log(d(a));