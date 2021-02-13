const arr1 = [9, 7, 5, 3];
const arr2 = [7, 9, 3, 5];

/*
 * Because of the nested for becomes n²
 * BigO -> O(n²)
 */
const bruteForce = (arr1, arr2) => {
    var response = true;
    for (let key1 of arr1) {
        if (!response) {
            return response;
        }
        response = false;
        for (let key2 of arr2) {
            if (key1 === key2) {
                response = true;
                break;
            }
        }
    }
    return response;
};

/*
 * Because of the sort, it becomes nlogn
 * BigO -> O(nlogn)
 */
const sortedList = (arr1, arr2) => {
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        return arr1[i] === arr2[i];
    }
};
/*
 * BigO -> O(n)
 */
const countThem = (arr1, arr2) => {
    const map1 = {};
    for (let key of arr1) {
        map1[key] = (map1[key] || 0) + 1;
    }
    const map2 = {};
    for (let key of arr2) {
        map2[key] = (map2[key] || 0) + 1;
    }
    for (let key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true;
};

console.log(
    `-----bruteForce---- Ìs arr1 and arr2 equals? ${bruteForce(arr1, arr2)}`
);
console.log(
    `-----countThem----- Ìs arr1 and arr2 equals? ${countThem(arr1, arr2)}`
);
console.log(
    `-----sortedList---- Ìs arr1 and arr2 equals? ${sortedList(arr1, arr2)}`
);
