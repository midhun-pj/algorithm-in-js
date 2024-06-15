const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middle = leftIndex + rightIndex / 2;

    if (target === arr[middle]) {
      return middle;
    }

    if (arr[middle > target]) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }
  return -1;
};

console.log(isPrime(3));
