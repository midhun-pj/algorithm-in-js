function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort([1, 6, 15, 30, 32, 33, 36, 42, 45, 46, 47, 48]))

/**
 * Best case O(n)
 * 
 * Worst and average case O(n^2)
 */