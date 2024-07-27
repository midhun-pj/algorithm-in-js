// Time complexity is O(n)

function sumOfN(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }

  return sum
}


// Time complexity is O(1)
function sumOfNWithFormula(n) {
  const sum = n * (n + 1) / 2

  return sum
}
const t1 = performance.now();
sumOfN(55000000)
const t2 = performance.now();

console.log(`Time Elapsed sumOfN: ${(t2-t1) / 1000 } seconds.`)


const t3 = performance.now();
sumOfNWithFormula(55000000)

const t4 = performance.now();

console.log(`Time Elapsed sumOfNWithFormula: ${(t4-t3) / 1000 } seconds.`)
