/**
 * Write a function called areThereDuplicates which accepts
 * a variable num of arg and checks whether there are any duplicates
 * among the arguements passed in.
 */

// set removes duplicate items automatically
/**
 *
 * @returns true - has duplicates, false - no duplicates
 */
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length
}

function areThereDuplicatesPointer() {
  let collection = {}

  for (const element of arguments) {
    collection[element] = (collection[element] || 0) + 1
  }

  for (const element in collection) {
    if (collection[element] > 1) {
      return false
    }
  }

  return true
}

function areThereDuplicatesMultiPointer(...args) {
  args.sort((a, b) => {
    if (a < b) return -1
    if (a > b) {
      return 1
    }
    return 0
  })

  let start = 0;
  let next = 1;

  while(next< args.length) {
    if (args[start] === args[next]) {
        return true
    }

    next++;
    start++;
  }

  return false
}

console.log(areThereDuplicatesPointer(1, 2, 3))
console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicatesMultiPointer(1, 2, 3))
