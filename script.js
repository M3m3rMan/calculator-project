const display = document.getElementById("display");
let internalExpression = "";

function appendToDisplay(input) {
  if (input === "×") {
    display.value += "×";
    internalExpression += "*";
  } else if (input === "÷") {
    display.value += "÷";
    internalExpression += "/";
  } else {
    display.value += input;
    internalExpression += input;
  }
}

function clearDisplay() {
  display.value = "";
  internalExpression = "";
}

function calculate() {
  try {
    const result = eval(internalExpression);
    display.value = result;
    internalExpression = result.toString(); // So you can continue calculations
  } catch (error) {
    display.value = "Error";
    internalExpression = "";
  }
}
