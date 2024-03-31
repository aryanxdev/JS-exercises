// Input: s = "{[({[{}]})[({[]})]{[[{{}}]]}]}"
// Output: true

// 1. find the opening brackets and push them in an array
// 2. if you find a closing bracket, check if the bracket at the array.length-1 is the corresponding opening bracket
// 3. if yes then pop that bracket from the array
// 4. if not then return false
// 5. now if all the array elements have been popped, it means that string of brackets is valid

const isValid=(str)=>{
    let openingBracketsArray=[];
    for(let k of str)
    {
        if(k==='(' || k==='{' || k==="[")
        {
            openingBracketsArray.push(k);
        }
        else{
            if(!openingBracketsArray.length||
            (k===')' && openingBracketsArray[openingBracketsArray.length-1]!=='(')||
            (k==='}' && openingBracketsArray[openingBracketsArray.length-1]!=='{')||
            (k===']' && openingBracketsArray[openingBracketsArray.length-1]!=='['))
                {
                    return false;
                }
            openingBracketsArray.pop();
        }
    }
    return !openingBracketsArray.length; //if length hai to true hoga and not operator use false kr dega and if length nhi hai to false hoga and not operator use true krdega
}
console.log(isValid('{[({[{}]})[({[]})]{[[{{}}]]}]}'));



// LEET CODE SOLUTION
// var isValid = function(s) {
//     let stack = []; // create an empty stack to store opening brackets
//     for (let c of s) { // loop through each character in the string
//         if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
//             stack.push(c); // push it onto the stack
//         } else { // if the character is a closing bracket
//             if (!stack.length || // if the stack is empty or 
//                 (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
//                 (c === '}' && stack[stack.length - 1] !== '{') ||
//                 (c === ']' && stack[stack.length - 1] !== '[')) {
//                 return false; // the string is not valid, so return false
//             }
//             stack.pop(); // otherwise, pop the opening bracket from the stack
//         }
//     }
//     return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
//                           // so the string is valid, otherwise, there are unmatched opening brackets, so return false
// };


for(let i=0,j=1;i<10,j<11;i++,j++)
{
    console.log(i);
    console.log(j);
}