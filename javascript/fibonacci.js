function fibonacci(num) {
  const fib = [0, 1];
  if (num === 0 || num === 1) {
    return fib[num];
  } else {
    for (i = num; i > -1; i--) {
      let next = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(next);
    }
  }
  return fib[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// 1. create an array with two numbers: [0, 1].
// 2. if number is 0 or 1 return the value of the array at that index. otherwise run a for loop starting at the value of the argument that decreases by 1 each loop and runs until the iterator is not greater than -1.
// 3. during each loop add the last two elements of the array together (arr.length - 1, arr.length - 2).
// 4. once finished looping, return the value of the argument array[num].
// And a written explanation of your solution

// Must declare the start of fibonacci series with 0 and 1. From there we can run a loop based off of the argument number given and add the last two numbers in the fibonacci array together and push it onto the array to correctly get the correct next value in the sequence. Once the loop is finished running the value can be taken by grabbing the index of the fibonacci array at the value of the argument to the function.
