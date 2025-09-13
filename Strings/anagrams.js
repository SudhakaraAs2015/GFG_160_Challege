const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let freq1 = {};
  let freq2 = {};
  for (let char of s1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  for (let char of s2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }
  return true;
};
const s1 = "geeks";
const s2 = "keegs";
console.log(anagrams(s1, s2));
