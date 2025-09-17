const MAX_CHAR = 26; // Number of lowercase English letters

const nonRepeating = (s) => {
  const visited = new Array(MAX_CHAR).fill(-1); // Initialize visited array with -1 (no occurrences)
  
  // Step 1: Iterate through the string and track first occurrence index
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0); // Map character to index (0 for 'a', 1 for 'b', etc.)
    // console.log(charIndex,"Char Index");
    
    if (visited[charIndex] === -1) {
      visited[charIndex] = i; // Mark the first occurrence of the character
    } else if (visited[charIndex] >= 0) {
      visited[charIndex] = -2; // Mark it as repeated (-2 indicates repetition)
    }
  }

  // Step 2: Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - 'a'.charCodeAt(0); // Get the index of the character
   
    if (visited[charIndex] >= 0) {
      return s[i]; // Return the first non-repeating character
    }
  }

  return '$'; // Return '$' if no non-repeating character is found
};

// Example usage:
console.log(nonRepeating("geeksforgeeks")); // Output: 'f'
// console.log(nonRepeating("racecar"));       // Output: 'e'
