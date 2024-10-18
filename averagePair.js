/**
 * Write a function called averagePair. Given a sorted array of intergers and a target average, determine if there is a pair of values in the array where the average of the
 * pair equals the target average. There may be more than one pair that matches the average target.
 */

function averagePair(inputArray, average) {
  let start = 0
  let end = inputArray.length - 1

  while (start < end) {
    const avg = inputArray[start] + inputArray[end] / 2
    if (avg === average) {
      return true
    } else if (avg < average) {
      start++
    } else {
      end--
    }
  }
  return false
}


console.log(averagePair([1,2,3], 10));
