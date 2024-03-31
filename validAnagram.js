// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


let isValid=(str1,str2)=>{
    str2=str2.split('');
    for(let i=0;i<str1.length;i++)
    {
        for(let j=0;j<str2.length;j++)
        {
            if(str1[i]===str2[j])
            {
                str2.splice(j,1);
            }
        }
    }
    if(str2.length===0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(isValid("sagar","ragas"));


// BETTER APPROACH
let validAnagram=(s1,s2)=>{
    if(s1.length!==s2.length)
    {
        return false;
    }
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
    let freq=new Array(26).fill(0);
    for(let i=0;i<s1.length;i++)
    {
        freq[(s1.charCodeAt(i)-('a').charCodeAt(0))]++;
        freq[(s2.charCodeAt(i)-('a').charCodeAt(0))]--;
    }
    for(const k of freq)
    {
        if(k!==0)
        {
            return false;
        }
    }
    return true;
}
console.log(validAnagram("SAGAR", "RAGAS"));