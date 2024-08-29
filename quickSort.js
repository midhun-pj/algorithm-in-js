function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, index1, index2) => {
    ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }
  // we are assuming the myVar is always the first element
  const myVar = arr[start]

  let swapIndex = start
  for (let index = start + 1; index <= end; index++) {
    if (myVar > arr[index]) {
      swapIndex++
      swap(arr, swapIndex, index)
    }
  }

  swap(arr, start, swapIndex)
  return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)

    // left side sorting

    quickSort(arr, left, pivotIndex - 1)

    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}


console.log(quickSort([4,6,9,1,2,5]));
