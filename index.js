function isPalindrome(word) {
  // Write your algorithm here
  const reverse = word.split("").reverse().join("");
  if(word===reverse) {
      return true;
  }else {
      return false;
  }
}

/* 
  Add your pseudocode here
  find a version of the string reversed
  compare the string when reversed with when at normal state
  if the condition pass return false
  else retuen false
*/

/*
  Add written explanation of your solution here

  the algorithm to this problem is to check when the number is written in both ways wheather it still looks alike
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
