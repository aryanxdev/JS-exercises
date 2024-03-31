// REVERSE A STRING


let reverse=(str)=>{
    str=str.split('');
    let startingIndex=0;
    let endingIndex=str.length-1;
    let t;
    while(startingIndex<endingIndex)
    {    
        t=str[startingIndex];
        str[startingIndex]=str[endingIndex];
        str[endingIndex]=t;

        startingIndex++;
        endingIndex--;
    }
    return str
}
console.log(reverse("hannah"));