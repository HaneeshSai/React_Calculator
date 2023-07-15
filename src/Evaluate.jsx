import Factorial from "./factorial";

export default function evaluate(
  { currentOperand, previousOperand, operation, CompOperation },
  payload
) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (CompOperation == null) CompOperation = payload;

  let computation = "6";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;

    case "%":
      computation = (prev / 100) * current;
      break;

    case "^":
      computation = prev ** current;
      break;
  }

  switch (CompOperation) {
    case "x²":
      computation = current ** 2;
      console.log(computation);
      break;

    case "x³":
      computation = current ** 3;
      break;

    case "x!":
      computation = Factorial(current);
      break;

    case "log":
      computation = Math.log10(current);
      break;

    case "ln":
      computation = Math.log(current);
      break;

    case "√":
      computation = Math.sqrt(current);
      break;

    case "sin":
      computation = Math.sin(current);
      break;

    case "cos":
      computation = Math.cos(current);
      break;

    case "tan":
      computation = Math.tan(current);
      break;

    case "sinh":
      computation = Math.sinh(current);
      break;

    case "cosh":
      computation = Math.cosh(current);
      break;

    case "tanh":
      computation = Math.tanh(current);
      break;
  }
  return computation.toString();
}
