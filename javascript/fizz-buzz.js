let n = prompt('Introduce un número: ');

function fizzbuzz(num) {
  let msg = num;

  if (num % 3 === 0 && num % 5 === 0) {
    return msg + ': FizzBuzz';
  }
  if (num % 3 === 0) {
    return msg + ': Fizz';
  }
  if (num % 5 === 0) {
    return msg + ': Buzz';
  }

  return msg;
}

fizzbuzz(n);