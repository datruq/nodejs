function migratoryBirds(arr) {
    var map = {};
    var max = -1;
    var maxMax = [];
    for (let i of arr) {
        map[i] = (map[i] || 0) + 1;
    }
    for (let j in map) {
        if (map[j] > max) {
            if (max !== j)
                maxMax.push(j);
            max = j;
        }
    }
    let max1 = maxMax[maxMax.length - 1];
    let max2 = maxMax[maxMax.length - 2];
    return map[max1] === map[max2] ? max2 : max1;

}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))