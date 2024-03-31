let nums = [2,2,3,3,3,2,2];
nums.sort((a,b)=>a-b);
console.log(nums)
let counter=1;
for(let i=0;i<nums.length-1;i++)
{
    if(nums[i]===nums[i+1])
    {
        counter++;
    }
    else{
        // if(counter>(nums.length/2))
        // {
        //     console.log(nums[i]);
        //     break;
        // }
        // else{
            counter=1;
        // }
    }
    if(counter>(nums.length/2))
    {
        console.log(counter);
        console.log(nums[i]);
        break;
    }
}