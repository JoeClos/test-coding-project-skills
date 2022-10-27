function greetings() {
  return "Hello World!";
}

console.log(greetings());

function bingo(number) {
  if (number > 5) {
    return "Bingo!";
  } else {
    return "Try again!";
  }
}

console.log(bingo(5));
console.log(bingo(20));
console.log(bingo(-1));
