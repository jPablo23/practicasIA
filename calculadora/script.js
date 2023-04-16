let input = document.getElementById('result');

function addInput(num) {
  input.value += num;
}

function clearResult() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate(operator) {
  let result = eval(input.value);
  if (operator !== '=') {
    input.value = '';
    input.value += result + operator;
  } else {
    input.value = result;
  }
}
