// naman, nan => true
// aryan, sagar => false

let isPalindrome=(str)=>{
    for(let i=0;i<(str.length/2);i++)
    {
        if(str[i]!==str[str.length-(i+1)])
        {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("aryan"));
console.log(isPalindrome("naman"));  