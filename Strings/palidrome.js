function minCharsToAddForPalindrome(s) {
    // Step 1: Manually reverse the string
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    
    // Step 2: Concatenate original string with reversed string, separated by a special character
    const combined = s + '#' + reversed;
    
    // Step 3: Compute the LPS array
    const lps = computeLPS(combined);
    
    // Step 4: The answer is the length of the string minus the value of the last element of LPS array
    return s.length - lps[lps.length - 1];
}

// Function to compute the LPS array
function computeLPS(str) {
    const lps = Array(str.length).fill(0);
    let len = 0;
    let i = 1;
    
    // Step through the string and fill the LPS array
    while (i < str.length) {
        if (str[i] === str[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

// Example usage
console.log(minCharsToAddForPalindrome("abc"));      // Output: 2
console.log(minCharsToAddForPalindrome("aacecaaaa")); // Output: 2
