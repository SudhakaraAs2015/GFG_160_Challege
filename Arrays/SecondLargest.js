const secondLargest = (arr) => {
  if (arr.length < 2) return -1;

  let first = -1;
  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
    
  };
  return second;
};

console.log(secondLargest([1,34,44,2,6,7,10]));
// Time Complexity Big-O = O(n)
// Space Complexity Big-O = O(1)