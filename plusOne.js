
// let a='123';
// console.log(Number(a)+1)let a=[1,2,9];


//method 1
let a = [9, 9];
if (a[a.length - 1] === 9) {
    a[a.length - 1] = (a[a.length - 1] + 1) - 10;;
}
else {
    a[a.length - 1] = a[a.length - 1] + 1;
}
let i = a.length - 1;
while (a[i] === 0) {
    if ((a[i - 1]) === 9) {
        a[i - 1] = (a[i - 1] + 1) - 10;
    }
    else {
        a[i - 1]++;
    }
    i--;
}
console.log(a);


//method 2
let aa = [1, 5, 0, 0];
aa = aa.join('');
aa = Number(aa) + 1;
aa = String(aa);
aa = aa.split('');
for (let k in aa) {
    aa[k] = Number(aa[k]);
}
console.log(aa);



