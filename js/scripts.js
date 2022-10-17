// buisiness logic

function add(number1, number2) {
  return number1 + number2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function times(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function math(num1, num2) {
  const addNum = `The addition of ${num1} and ${num2} equals:  ${add(num1, num2)}`;
  const subNum = `The subtraction of ${num1} and ${num2} equals:  ${sub(num1, num2)}`;
  const timesNum = `The multipication of ${num1} and ${num2} equals:  ${times(num1, num2)}`;
  const divNum = `The division of ${num1} and ${num2} equals:  ${div(num1, num2)}`;
  window.alert(`${addNum}\n${subNum}\n${timesNum}\n${divNum}`);
}

// Interface logic

const num1 = parseInt(prompt("Enter a number: "));
const num2 = parseInt(prompt("Enter another number: "));

math(num1, num2);