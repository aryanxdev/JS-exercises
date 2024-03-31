// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.


let firstOcc = (str, word) => {
    let counter = 0;
    let firstOccIndex = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === word[0]) {
            for (let j = 0; j < word.length; j++) {
                if (str[i + j] === word[j]) {
                    counter++;
                }
                else {
                    counter = 0;
                    break;
                }
            }
        }
        if (counter === word.length) {
            firstOccIndex = i;
            return firstOccIndex;
        }
    }
    return firstOccIndex;
};

console.log(firstOcc("butsadsad", "sad"));
console.log(firstOcc("aryansagararyan", "sagar"));
console.log(firstOcc("a", "s"));