/// Write a JS function wchich takes a string and returns the count of each character in the string

// O(n)
function characterCount(str) {
  const result = {}

  for (const char of str) {
    const item = char.toLowerCase()

    if (/[a-z0-9]/.test(item)) {
      //   if (result[item]) {
      //     result[item]++
      //   } else {
      //     result[item] = 1
      //   }
      // better coding instead of if-else:
      result[item] = ++result[item] || 1
    }
  }

  return result
}

console.log(characterCount('hello my name is midhun pj'))
