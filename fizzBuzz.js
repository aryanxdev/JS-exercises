let fizzbuzz = (n) => {
    let a = new Array(n);
    for (i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            a[i - 1] = 'FizzBuzz'
        }
        else if (i % 3 === 0) {
            a[i - 1] = 'Fizz';
        }
        else if (i % 5 === 0) {
            a[i - 1] = 'Buzz'
        }
        else {
            a[i - 1] = i;
        }
    }
    return a;
}

console.log(fizzbuzz(15));