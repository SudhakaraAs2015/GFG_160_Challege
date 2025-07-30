function oneTransaction(arr) {
    if (arr.length === 0) return 0; // edge case

    let minSoFar = arr[0];
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        minSoFar = Math.min(minSoFar, arr[i]);
        profit = Math.max(profit, arr[i] - minSoFar);
    }

    return profit;
}




console.log(oneTransaction([10,1,7,8,13,1,15]));
