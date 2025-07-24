function nextPermutation(arr) {
  let n = arr.length;
  let i = n - 2;

  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  reverse(arr, i + 1, n - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

let arr = [2, 4, 1, 7, 5, 0];
console.log(nextPermutation(arr));  // Output: [2, 4, 5, 0, 1, 7]

//TC = O(n)
//SC = O(1)
