import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import reducer from "./Reducer";
import ComplexOperation from "./ComplexOperation";
import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
  COMPLEX_OPERATION: "complex-operation",
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export default function App() {
  const [
    { currentOperand, previousOperand, operation, CompOperation },
    dispatch,
  ] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">
          {formatOperand(currentOperand)}
          <div className="compOperation">{CompOperation}</div>
        </div>
      </div>
      <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
      <OperationButton operation="%" dispatch={dispatch} />
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>

      <div className="exponent">
        <OperationButton operation="^" dispatch={dispatch} />
        <ComplexOperation CompOperation="x²" dispatch={dispatch} />
        <ComplexOperation CompOperation="x³" dispatch={dispatch} />
        <ComplexOperation CompOperation="x!" dispatch={dispatch} />
        <ComplexOperation CompOperation="log" dispatch={dispatch} />
        <ComplexOperation CompOperation="ln" dispatch={dispatch} />
        <ComplexOperation CompOperation="√" dispatch={dispatch} />
      </div>

      <div className="trignometry">
        <ComplexOperation CompOperation="sinh" dispatch={dispatch} />
        <ComplexOperation CompOperation="sin" dispatch={dispatch} />
        <ComplexOperation CompOperation="cosh" dispatch={dispatch} />
        <ComplexOperation CompOperation="cos" dispatch={dispatch} />
        <ComplexOperation CompOperation="tanh" dispatch={dispatch} />
        <ComplexOperation CompOperation="tan" dispatch={dispatch} />
        <DigitButton digit="π" dispatch={dispatch} />
      </div>
    </div>
  );
}
