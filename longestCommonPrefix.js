// a=["flower","flow","flight"];
// expected output="fl";

let commonPrefix=(str)=>{
    let prefix=str[0];
    prefix=prefix.split('');

    for(let i=0;i<str.length;i++)
    {
        let fellowstring=str[i];
        let n=prefix.length;
        if(n>0)
        {
            for(let i=0;i<n;i++)
            {
                if((prefix[i]!==fellowstring[i]))
                {
                    prefix.splice(i);
                }
            }
        }
        if(prefix.length<1){
            return 1;
        }
    };
    return prefix.join('');
}

let str=["a","ab","c"];
let str2=["flower","flow","flight"];

console.log(commonPrefix(str));//ryan
console.log(commonPrefix(str2));//fl