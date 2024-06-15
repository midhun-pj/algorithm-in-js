const factorialOfNumber = (n) => {
  let result = 1;

  for (let index = 1; index <= n; index++) {
    result *= index;
  }

  return result;
};

console.log(factorialOfNumber(0));
// O(n) time complexity
