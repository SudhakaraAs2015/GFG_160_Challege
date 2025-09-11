const addBinaryString = (s1, s2) => {
  let result = "";
  let carry = 0;
  while (s1.length < s2.length) {
    s1 = "0" + s1;
  }
  while (s2.length < s1.length) {
    s2 = "0" + s2;
  }
  for (let i = s1.length - 1; i >= 0; i--) {
    let bit1 = s1[i] === "1" ? 1 : 0;
    let bit2 = s2[i] === "1" ? 1 : 0;

    let sum = bit1 + bit2 + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry) {
    result = "1" + result;
  }
  return result;
};
const s1 = "00100";
const s2 = "010";
console.log(addBinaryString(s1, s2));
