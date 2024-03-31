let isTriplet = (hyp, perp, base) => {
    hyp = hyp ** 2;
    perp = perp ** 2;
    base = base ** 2;
    if (hyp == (perp + base)) {
        return true;
    }
    else {
        return false;
    }
};

let max = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            console.log(isTriplet(a, b, c));
            return;
        }
        else {
            console.log(isTriplet(c, b, a));
            return;
        }
    }
    else {
        if (b > c) {
            console.log(isTriplet(b, a, c));
            return;
        }
        else {
            console.log(isTriplet(c, b, a));
            return;
        }
    }
};

max(3, 4, 5);

// A thing in Javascript
let a = [3, 2, 5, 4, 3, 5, 34, 5];
console.log(Math.max(...a))