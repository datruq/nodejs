function getTotalX(a, b) {
    var start = a[a.length - 1];
    var end = b[0];
    var res = [];
    for (let i = start; i < end; i++) {
        var aPass = true, bPass = true;
        for (let s of a) {
            if (i % s !== 0) aPass = false;
        }

        if (!aPass) continue;
        for (let x of b) {
            if (x % i !== 0) bPass = false;
        }
        if (aPass && bPass) res.push(i);
    }
    console.log(res.length);
}

getTotalX([2, 6], [24, 36]);
getTotalXBest([2, 4], [16, 32, 96]);

function getTotalXBest(a, b) {
    var lastA = a[a.length - 1];
    var firstB = b[0];
    var mapA = {};
    var mapB = {};
    var res = [];
    for (let i = lastA; i <= firstB; ++i) {
        for (let ofA of a) {
            if (i % ofA === 0) mapA[i] = (mapA[i] || 0) + 1;
        }
        for (let ofB of b) {
            if (ofB % i === 0) mapB[i] = (mapB[i] || 0) + 1;
        }
    }
    for (let i in mapA) {
        if (mapA[i] === a.length && mapB[i] === b.length)
            res.push(i);
    }
    console.log(res.length);
}
