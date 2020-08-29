/*
 * Kangaroo excercise
 */

function kangaroo(x1, v1, x2, v2) {
    const limit = 1000;
    const map = {};
    if (x2 > x1 && v2 > v1) {
        return 'NO';
    }
    for (let i = x1; i < limit; i += v1) {
        map[i] = 1;
    }
    const map2 = {};
    for (let i = x2; i < limit; i += v2) {
        map2[i] = 1;
    }
    for (let key in map) {
        for (let key2 in map2) {
            if (key === key2) {
                console.log(key, key2);
                return 'YES';
            }
        }
    }
    return 'NO';
}

console.log('Syncronized: ', kangaroo(28, 8, 96, 2));
