function generateFibonacci() {
  const inputNumber = document.getElementById('inputNumber').value;
  const fibonacciSequence = document.getElementById('fibonacciSequence');
  fibonacciSequence.innerHTMl = '';

  let fibNumbers = [0, 1];
  for (let i = 2; i < inputNumbers; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }
}