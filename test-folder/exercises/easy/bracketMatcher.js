function BracketMatcher(str) {
    var reg = [];
    var count = 0;
    if (!/[()]/.test(str)) return 1;
    for (let par of str) {
        if (/[()]/.test(par))
            reg.push(par);
    }
    for (let par of reg) {
        if (par === '(') ++count;
        if (par === ')') --count;
        if (count < 0) return 0;
    }
    return count === 0 ? 1 : 0;

}

// keep this function call here 
console.log(BracketMatcher('(coder)(byte))'));