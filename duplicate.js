let containsDuplicates=(nums)=>{
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-1;i++)
    {
        if(nums[i]===nums[i+1])
        {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([1,2,3,4,5,5]));
