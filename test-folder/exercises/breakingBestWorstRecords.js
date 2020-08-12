function breakingBestAndWosrtRecords(scores) {
    var highest = -1;
    var lowest = 1000000000;
    var highestCount = 0;
    var lowestCount = 0;

    for (let s of scores) {
        if (s > highest) {
            highest = s;
            highestCount++;
        }

        if (s < lowest) {
            lowest = s;
            lowestCount++;
        }
    }
    return [highestCount - 1, lowestCount - 1];
}
const result = breakingBestAndWosrtRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
console.log(result);
