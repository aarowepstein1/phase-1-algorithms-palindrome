function isPalindrome(word) {
  // Write your algorithm here
  const compareWord = word.split('').reverse().join('');
  if (word === compareWord){
    return true;
  }else {
    return false;
  }
}

/* 
  Add your pseudocode here
  need to be able to reverse the word then compare it to the original
  result. 
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
