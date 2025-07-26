function majorityElements(arr) {
    let n = arr.length;
    let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;

    // Step 1: Find candidates
    for (let num of arr) {
        if (candidate1 === num) {
            count1++;
        } else if (candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify candidates
    count1 = 0;
    count2 = 0;
    for (let num of arr) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result.sort((a, b) => a - b);
}

// Example usage:
let arr = [2, 2, 3, 1, 3, 2, 1, 1];
console.log(majorityElements(arr)); // Output: [1, 2]
