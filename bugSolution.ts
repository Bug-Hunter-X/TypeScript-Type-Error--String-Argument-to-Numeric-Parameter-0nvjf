function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

let result1 = add(5, 10); // Correct: result1 will be 15

// Using type assertion (less safe, use with caution):
let result2 = add(5, <number>parseInt('10')); // Correct: result2 will be 15

//Example of handling errors
try {
    let result3 = add(5, '10');
} catch (error) {
    console.error(error.message);
}
