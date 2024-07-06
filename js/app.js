function generateFibonacci() {
  const inputNumber = document.getElementById('inputNumber').value;
  const fibonacciSequence = document.getElementById('fibonacciSequence');
  fibonacciSequence.innerHTML = '';

  let fibNumbers = [0, 1];
  for (let i = 2; i < inputNumber; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }

  fibNumbers.slice(0, inputNumber).forEach(num => {
    const fibBox = document.createElement('div');
    fibBox.className = 'fib-box';
    fibBox.textContent = num;
    fibonacciSequence.appendChild(fibBox);
  });
}