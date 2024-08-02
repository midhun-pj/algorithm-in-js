// Write a function called sumZero which  accepts a sorted array of integers
// The fn should find the first pair where the sum is 0. Return arrya that includes both values that sum to zero

// O(n^2) time complexity
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }

  return false
}

console.log(sumZero([-2, -1, 0, 1, 2]))


// efficient solution O(n)
const sumZeroFactor = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      left++
    } else {
      right--
    }
  }

  return false
}
console.log(sumZeroFactor([-2, -1, 0, 1, 2, 3]))
