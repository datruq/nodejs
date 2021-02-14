function incrementedByOne(arr) {
    var current = 10;
    for (var index = arr.length - 1; index >= 0 && current > 9; index--) {
        current = arr[index] + 1;
        arr[index] = current % 10;
    }

    if (current > 9 ) {
        arr.unshift(1);
    }
    return arr;
}

function incremetedByX(arr, x) {
    var carry = x;
    var index = arr.length - 1;
    for (var index = arr.length - 1; index >= 0 && carry > 0; index--) {
        var current = arr[index] + carry;
        arr[index] = current % 10;
        carry =  Math.trunc(current / 10);
    }

    if (carry > 0 ) {
        arr.unshift(1);
    }
    return arr;
}

function sumTwoBigDigits(arr1, arr2) {
    debugger;
    var index = arr1.length - 1;
    var answer = [];
    var carry = 0;
    var upTo = arr2.length - 1 > index ? arr2 : arr1;
    for (var i = upTo.length - 1; i >= 0; i--) {
        var current = carry;
        if (i < arr1.length) {
            current += arr1[i];
        }
        if (i < arr2.length) {
            current += arr2[i];
        }
        answer.unshift(current%10);
        carry = Math.trunc(current / 10);
    }
    if (carry > 0) {
        answer.unshift(1);
    }
    return answer;


}

console.log("incremented by one");
console.log(incrementedByOne([1,2,3,9]));
console.log(incrementedByOne([9,9,9,9]));
console.log(incrementedByOne([1,2,9,9]));
console.log("incremented by X");
console.log(incremetedByX([1,2,3,4], 9));
console.log("Sum two big numbers");
console.log(sumTwoBigDigits([9,9], [2,1]));