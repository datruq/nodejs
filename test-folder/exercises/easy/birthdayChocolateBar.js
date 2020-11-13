function birthday(s, d, m) {
    var arr = [];
    var count = 0;
    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < i + m; ++j) {
            arr[i] = (arr[i] || 0) + s[j];
        }
    }
    for (let i of arr) {
        if (i === d) ++count;
    }
    return count;
}

console.log(birthdayLinear([1, 2, 1, 3, 2], 3, 2));
