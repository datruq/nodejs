function getTotalX(a, b) {
    var start = a[a.length - 1];
    var end = b[0];
    var res = [];
    debugger;
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
    console.log(res);
}

getTotalX([2,6], [24, 36]);