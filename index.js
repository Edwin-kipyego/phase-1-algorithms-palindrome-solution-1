function isPalindrome(word) {
  // Reverse the word and compare it to the original
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Split the word into an array of characters.
  2. Reverse the array.
  3. Join the reversed array back into a string.
  4. Compare the reversed string with the original word.
  5. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  A palindrome reads the same forward and backward. By reversing the string
  and comparing it to the original, we can determine if the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
