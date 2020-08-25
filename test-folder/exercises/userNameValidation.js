function CodelandUsernameValidation(str) {
    debugger;
    var len = str.length;
    var res = false;
    if (len < 4 || len > 25) return res;
    if (!/[a-z]/.test(str[0])) return res;
    if (/[_]/.test(str[len - 1])) return res;
    var arr = Array.from(str);
    res = arr.every((x) => /[a-z_0-9]/.test(x));
    // code goes here
    return res;
}

// keep this function call here
console.log(CodelandUsernameValidation('qaopresadl1234567890qasw00'));
