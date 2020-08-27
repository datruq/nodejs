function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            //debugger;
            if ((ar[i] + ar[j]) % k == 0) ++count;
        }
    }
    console.log(count);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
/*
divisibleSumPairsBest(6, 3, [1, 3, 2, 6, 1, 2]);

function divisibleSumPairsBest(n, k, ar) {
    var arr = [];
    var count = 0;
    for (let i = 0; i < n; ++i) {
        let mod = ar[i] % k;
        let arr2 = [ar[i]];
        debugger;
        arr[mod] = (arr[mod] || []);
        arr[mod].push(...arr2);
    }
    debugger;
    console.log(arr[0]);
}
*/