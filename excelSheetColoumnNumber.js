// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

let title_to_numbers = (str) => {
    str = str.toUpperCase();
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = (result * 26) + ((str.charCodeAt(i) - ('A').charCodeAt(0)) + 1);
    }
    return result;
}
console.log(title_to_numbers("Z"));