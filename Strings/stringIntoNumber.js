const myAtios = (s) => {
  let i = 0;
  const n = s.length;
  let result = 0;
  let sign = 1;
  // step 1: skip whitespace
  while (i < n && s[i] === '') {
    i++;
  }

  //step 2 : check for + or -
  if ((i < n && s[i] === "+") || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }
  //step 3: convert digit characters to number
  while (i < n && s[i] >= "0" && s[i] <= "9") {
   const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
    result = result * 10 + digit;
    i++;
  }
  result *= sign;
  // step 4: clamp to 32-bit range
  const Int_Min = -Math.pow(2, 31);
  const Int_Max = Math.pow(2, 31) - 1;
  if (result < Int_Min) return Int_Min;
  if (result > Int_Max) return Int_Max;
  return result;
};
console.log(myAtios("-123"));
console.log(myAtios("12458"));
