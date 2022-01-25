const add = function (x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

const multiply = function (x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

const calculate = function (operator, x, y) {
  switch (operator) {
    case '+': return add(x, y);
    case '-': return subtract(x, y);
    case '*': return multiply(x, y);
    case '/': return divide(x, y);
  }
}

const displayInput = function (input) {
  const display = document.querySelector('.calculator-display');
  display.value = input;
}

const listener = function () {

  let x = '';
  let y = '';
  let activeVariable = 'x';
  let operator = '';
  let result = 0;

  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const keyClass = event.target.classList.value;
    const keyValue = event.target.value;

    if (keyClass === 'number' && activeVariable === 'x') {
      x += keyValue;
      displayInput(x);
    }
    else if (keyClass === 'number' && activeVariable === 'y') {
      y += keyValue;
      displayInput(y);
    }

    if (keyClass === 'operator' && activeVariable === 'x') {
      activeVariable = 'y';
      displayInput(keyValue);
      operator = keyValue;
    }

    if (keyClass === 'equal-sign' && y !== '') {
      result = calculate(operator, x, y);
      displayInput(result);
      activeVariable = 'x';
      x = result;
      y = '';
    }

    if (keyClass === 'all-clear') {
      x = '';
      y = '';
      activeVariable = 'x';
      result = 0;
      operator = '';
      displayInput('0');
    }

  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed...')
  console.log('Deploy listener for buttons & keys...')
  listener();
  console.log('Listener deployed...')
})