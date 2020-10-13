function bonAppetit(bill, k, b) {
    var res = "Bon Appetit";
    var sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i === k) continue;
        sum += bill[i];
    }
    var annaToPay = sum / 2;
    if (annaToPay === b) console.log(res)
    else console.log(b - annaToPay);
}

bonAppetit([3, 10, 2, 9], 1, 7);