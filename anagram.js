/** Given two strings
 *  write a fn to determine if the second string is an anagram of the first
 *  eg: cinema and iceman // true
 */

// O(n)

function checkAnagram(str1, str2) {
  // If the lengths of the strings are not equal, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false
  }

  // Create a frequency map for the characters in the first string
  const charCount = {}

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  // Decrease the frequency based on the characters in the second string
  for (let char of str2) {
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  console.log(charCount)

  return true
}

console.log(checkAnagram('cinema', 'iceman'))
