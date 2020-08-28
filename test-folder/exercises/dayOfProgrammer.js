function dayOfProgrammer(year) {
    var resLeap = '12.09.' + year;
    var resNotLeap = '13.09.' + year;
    var edgeRes = '26.09.1918';
    if (1918 === year) return edgeRes;
    if (1918 < year) {
        return isLeapYearGregorian(year) ? resLeap : resNotLeap;
    }
    return isLeapYearJulian(year) ? resLeap : resNotLeap;
}

function isLeapYearGregorian(year) {
    var res = year % 400 === 0;
    if (res) return res;
    return year % 4 === 0 && year % 100 !== 0;
}

function isLeapYearJulian(year) {
    return year % 4 === 0;
}

console.log(dayOfProgrammer(2016));