// buisiness logic

function add(number1, number2) {
  return number1 + number2;
}

// Interface logic

const num1 = parseInt(prompt("Enter a number: "));
const num2 = parseInt(prompt("Enter another number: "));

window.alert(add(num1, num2));