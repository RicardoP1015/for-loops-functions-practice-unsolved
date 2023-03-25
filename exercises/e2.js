// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  const result = []
  for (let i = 0; i < max; i++) {
    let squareRoot = 0;

    for (let j = 0; j * j <= i; j++) {
      if (j * j === i) {
        squareRoot = j;
      }
    }
    if (squareRoot * squareRoot === i) {
      result.push(i);
    }
  }

  return result;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
