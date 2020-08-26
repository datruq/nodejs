//Brute force O(n^2)
function FindIntersection(strArr) {
    var res = [];
    var fisrtArr = strArr[0].split(', ');
    var secondArr = strArr[1].split(', ');
    for (let f of fisrtArr) {
        for (let s of secondArr) {
            if (f === s) {
                res.push(f);
                break;
            }
        }
    }
    return res.length === 0 ? false : res.join(',');
}

//O(n)
function FindIntersectionBest(strArr) {
    var res = [];
    var map = {}
    var fisrtArr = strArr[0].split(', ');
    var secondArr = strArr[1].split(', ');
    for (let f of fisrtArr) {
        map[f] = (map[f] || 0) + 1;
    }
    for (let s of secondArr) {
        map[s] = (map[s] || 0) + 1;
    }
    for (let m in map) {
        if (map[m] > 1) {
            res.push(m);
        }
    }
    return res.length === 0 ? false : res.join(',');
}

console.log(FindIntersection(['1, 3, 5, 7, 9', '0 , 8, 9']))
console.log(FindIntersectionBest(['1, 3, 5, 7, 9', '0 , 8, 9']))

