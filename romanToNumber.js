const romans={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
};

let romanStringToNumber=(romanNumberString)=>
{
    convertedTOnumber=0;
    let wrappedRomanNumber;
    let romanNumberStringArray=romanNumberString.split(''); //stings are mutable but we doing this cause we'll be splicing values
    for(let i=0;i<romanNumberStringArray.length;i++)
    {
        if(romans[romanNumberStringArray[i]]<romans[romanNumberStringArray[i+1]])
        {
            wrappedRomanNumber=(romans[romanNumberStringArray[i+1]]-romans[romanNumberStringArray[i]])
            romanNumberStringArray.splice(i,2);
            i-=1; //for example in MCDXLII, starting mein C<D milgya to vo dono k beech subtraction hua and splice hogye, then the array becomes small, length changes, indices ki value changes cause choti value and uske baad ki value to splice hogyi to ab unke baad vaali value 2 index peeche aa jayegi but remember i pe to abhi bhi vahi index hai na jispe choti value thi to ab i ko us index se hi vaapis chalana padega cause ab new value to us index pe hi aayegi na to isliye i-=1

            // romanNumberStringArray.push(wrappedRomanNumber);
            convertedTOnumber+=wrappedRomanNumber;
        }
        else{
            convertedTOnumber+=romans[romanNumberStringArray[i]];
        }
    };

    // romanNumberStringArray.forEach((n)=>{
    //     if(typeof n==='string')
    //     {
    //         convertedTOnumber+=romans[n];
    //     }
    //     else{
    //         convertedTOnumber+=n;
    //     }
    // });

    return convertedTOnumber;
};

const romanString1='XXIX';
const romanString2='XXXIV';
const romanString3='XLII';
const romanString4='MCDXLVII';

console.log(romanStringToNumber('CM'));
console.log(romanStringToNumber('XL'));
console.log(romanStringToNumber(romanString1));
console.log(romanStringToNumber(romanString2));
console.log(romanStringToNumber(romanString3));
console.log(romanStringToNumber(romanString4));



// GPT
// function romanToInteger(roman) {
//     const romanNumerals = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000
//     };
  
//     let result = 0;
  
//     for (let i = 0; i < roman.length; i++) {
//       const currentSymbolValue = romanNumerals[roman[i]];
//       const nextSymbolValue = romanNumerals[roman[i + 1]];
  
//       if (nextSymbolValue > currentSymbolValue) {
//         result += nextSymbolValue - currentSymbolValue;
//         i++; // Skip the next symbol since it has already been considered
//       } else {
//         result += currentSymbolValue;
//       }
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const romanNumeral = 'MCDXLII';
//   const integerValue = romanToInteger(romanNumeral);
  
//   console.log(`${romanNumeral} is equivalent to ${integerValue}`);