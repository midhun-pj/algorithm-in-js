function binarySearch (arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middle = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      leftIndex = middle + 1;
    } else {
      rightIndex = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1,3,5],5));
