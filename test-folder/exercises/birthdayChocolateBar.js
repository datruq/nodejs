function birthday(s, d, m) {
    var arr = [];
    var count = 0;
    debugger;
    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < i + m; ++j) {
            arr[i] = (arr[i] || 0) + s[j];
        }
    }
    for (let i of arr) {
        if (i === d) ++count;
    }
    console.log(count);
}

birthday([1, 2, 1, 3, 2], 3, 2);