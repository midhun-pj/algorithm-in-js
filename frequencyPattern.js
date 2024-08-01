/** Write a function called same
 *  which accepts two arrays
 *  should return true if every value in the array has its coresponding value squared in the second array
 *  The frequency value should be the same
 */

// common approach O(n^2) because indexOf is running a loop
/**
 *
 * @param {*} arr1 array
 * @param {*} arr2 array
 * @returns boolean
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] ** 2)

    if (index === -1) {
      return false
    }

    arr2.splice(index, 1)
  }

  return true
}

console.log(same([1, 2, 4], [16, 1, 4]))

// optimised approach O(n)

function sameOptimized(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  const arrayCounter1 = {}
  const arrayCounter2 = {}

  for (const char of arr1) {
    arrayCounter1[char] = (arrayCounter1[char] || 0) + 1
  }

  for (const ch of arr2) {
    arrayCounter2[ch] = (arrayCounter2[ch] || 0) + 1
  }

  console.log(arrayCounter1)
  console.log(arrayCounter2)

  for (const key in arrayCounter1) {
    if (!(key ** 2 in arrayCounter2)) {
      return false
    }

    if (arrayCounter2[key ** 2] !== arrayCounter1[key]) {
      return false
    }
  }

  return true
}

console.log(sameOptimized([1, 2, 4], [16, 1, 4]))
