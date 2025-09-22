function computeLPSArray(pat) {
    let n = pat.length;
    let lps = new Array(n).fill(0);
  
    // length of the previous longest prefix suffix
    let len = 0;

    // lps[0] is always 0
    lps[0] = 0;

    // loop calculates lps[i] for i = 1 to n-1
    let i = 1;
    while (i < n) {
      
        // if the characters match, increment len 
        // and extend the matching prefix
        if (pat[i] === pat[len]) {
            len++;
            lps[i] = len;
            i++;
        }
      
        // if there is a mismatch
        else {
          
            // if len is not zero, update len to
            // last known prefix length
            if (len !== 0) {
                len = lps[len - 1];
            }
          
            // no prefix matches, set lps[i] = 0
            // and move to the next character
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// function to check if s1 and s2 are rotations of each other
function areRotations(s1, s2) {
    let txt = s1 + s1;
    let pat = s2;
    
    // search the pattern string s2 in the concatenation string 
    let n = txt.length;
    let m = pat.length;

    // create lps[] that will hold the longest prefix suffix
    // values for pattern
    let lps = computeLPSArray(pat);
  
    let i = 0; 
    let j = 0;
    while (i < n) {
        if (pat[j] === txt[i]) {
            j++;
            i++;
        }

        if (j === m) {
            return true;
        }

        // mismatch after j matches
        else if (i < n && pat[j] !== txt[i]) {

            // do not match lps[0..lps[j-1]] characters,
            // they will match anyway
            if (j !== 0)
                j = lps[j - 1];
            else
                i++;
        }
    }
    return false;
}

// Driver Code
const s1 = "aab"; 
const s2 = "aba";
console.log(areRotations(s1, s2) ? "true" : "false");