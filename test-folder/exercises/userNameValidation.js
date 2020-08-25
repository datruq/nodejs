function CodelandUsernameValidation(str) {
    var len = str.length;
    var isValid = false;
    if (len < 4 || len > 25) return isValid;
    if (!/[a-z]/.test(str[0])) return isValid;
    if (/[_]/.test(str[len - 1])) return isValid;
    var arr = Array.from(str);
    isValid = arr.every((x) => /[a-z_0-9]/.test(x));
    return isValid;
}

// keep this function call here
console.log(CodelandUsernameValidation('qaopresadl1234567890qasw00'));
