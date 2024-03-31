let a = [4, 1, 2, 1, 2, 5, 4]; let t = a[0]

for (let i = 0; i < a.length; i++) {
    if (a[i] > t) {
        t = a[i];
    }
}

let b = new Array(t).fill(0);
console.log(b);

for (let j = 0; j < a.length; j++) {
    b[a[j] - 1]++;
}

for (let k = 0; k < b.length; k++) {
    if (b[k] === 1) {
        console.log(k + 1);
        break;
    }
}