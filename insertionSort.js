/**
 * After each iteration the element will be in the correct position (consider numbers)
 *
 * Builds up the sort by gradually creating a larger left half which is always sorted
 *
 * @param arr any array
 */

function insertionSort(arr) {
  let currentElement
  for (let i = 1; i < arr.length; i++) {
    currentElement = arr[i]

    for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = currentElement
  }

  return arr
}

console.log(insertionSort([2, 1, 9, 76, 55, 4]))
