function selectionSort(arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) swap(arr, i, minIndex)
  }
  return arr
}

console.log(selectionSort([10, 6, 151, 30, 37, 33, 36, 47, 45, 46, 49, 48]))

/**
 *
 * Worst and average case O(n^2)
 */
