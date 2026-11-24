
function calculate(operator) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);

  if (
    document.getElementById("num1").value === "" ||
    document.getElementById("num2").value === ""
  ) {
    document.getElementById("result").textContent =
      "Please enter both numbers.";
    return;
  }

  let answer;

  switch (operator) {
    case "+":
      answer = a + b;
      break;

    case "-":
      answer = a - b;
      break;

    case "*":
      answer = a * b;
      break;

    case "/":
      if (b === 0) {
        document.getElementById("result").textContent =
          "Cannot divide by zero.";
        return;
      }
      answer = a / b;
      break;
  }

  document.getElementById("result").textContent =
    "Result: " + answer;
}