const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let index = 2; index < Math.sqrt(n); index++) {
    if (n % index === 0) {
      return false;
    }

    return true;
  }
};

console.log(isPrime(3))