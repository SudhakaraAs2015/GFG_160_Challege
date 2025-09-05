const circularMaxSumSubArray = (arr) => {
  let totalSum = arr[0];
  let currMax = arr[0];
  let currMin = arr[0];
  let maxSum = arr[0];
  let minSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currMax = Math.max(currMax + arr[i], arr[i]);
    maxSum = Math.max(currMax, maxSum);
    currMin = Math.min(currMin + arr[i], arr[i]);
    minSum = Math.min(currMin, minSum);
    totalSum +=arr[i];
    if (minSum === totalSum) {
      return maxSum;
    }
  }
  let circularSum = totalSum - minSum;
  return Math.max(maxSum, circularSum);
};
console.log(circularMaxSumSubArray([8, -8, 9, -9, 10, -11, 12]));
