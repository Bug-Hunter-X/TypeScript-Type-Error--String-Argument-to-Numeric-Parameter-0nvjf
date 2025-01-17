# TypeScript Type Error: String Argument to Numeric Parameter

This example demonstrates a common type error in TypeScript that occurs when a string is passed as an argument to a function parameter that is expecting a number.  The type system is designed to catch these issues at compile time, preventing runtime errors.

**bug.ts** shows the code causing the error and **bugSolution.ts** provides a solution.

## How to reproduce

1.  Save the code from `bug.ts` into a file named `bug.ts`. 
2.  Attempt to compile the code using the TypeScript compiler (tsc). You will see a type error.

## Solution

The solution involves adding input validation or type guards to ensure that the function receives the correct type of arguments.