// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


let findNextSquare = (sq) =>
  Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

console.log(findNextSquare(3000));