// Recursive implementation is 10 times slower than loop (for, while)
function power(base, exponent) {
    if (exponent == 0) return 1;
    else return base * power(base, exponent - 1);
}
console.log(power(2, 6));
