let obj={};
let a = 'Sagar';
for(let aa of a)
{
    if(!obj[aa]) //if((aa in obj)===false) //also works
    {
        obj[aa]=1;
    }
    else{
        obj[aa]++;
    }
}
console.log('\n'+a+'\n');
console.log(obj);

obj={};
let b='lol what lol what lol';
b=b.split(' '); //this means that jahan jahan string mein space mile vahan vahan se string ko split krdo and the splitted values will be stored in an array. if i don't add a space between the inverted commas then the string will be splitted into an array containing every letter in it
for(let bb of b)
{
    if(!obj[bb]) //if((aa in obj)===false) //also works
    {
        obj[bb]=1;
    }
    else{
        obj[bb]++;
    }
}
console.log('\n'+b+'\n');
console.log(obj);

