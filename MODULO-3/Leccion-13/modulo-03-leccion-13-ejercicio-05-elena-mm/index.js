function fizzBuzz(number) {
  if (number % 5 === 0) {
    if ( number % 3 === 0) {
      return "fizzbuzz";
    }
    return "buzz";
  } else if (number % 3 === 0) {
    return 'fizz';
  } else {
    return number;
  }
}
  module.exports = fizzBuzz;