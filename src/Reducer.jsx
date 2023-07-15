import { ACTIONS } from "./App";
import evaluate from "./Evaluate";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "π" && state.previousOperand != null)
        payload.digit = 3.14;
      if (payload.digit === "π" && state.previousOperand == null) {
        return {
          ...state,
        };
      }

      if (state.override) {
        return {
          ...state,
          currentOperand: payload.digit,
          previousOperand: state.currentOperand,
          override: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;

      if (
        payload.digit === "." &&
        state.currentOperand != null &&
        state.currentOperand.includes(".")
      )
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.CompOperation == null && state.operation == null) {
        return {
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null,
        };
      }

      if (state.CompOperation == null && state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      if (state.operation && !state.currentOperand) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        CompOperation: null,
        operation: payload.operation,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.override)
        return {
          ...state,
          currentOperand: null,
        };

      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        previousOperand: null,
        override: true,
        operation: null,
        currentOperand: evaluate(state),
      };

    case ACTIONS.COMPLEX_OPERATION:
      if (state.currentOperand == null) {
        return state;
      }

      if (state.CompOperation == null) {
        return {
          currentOperand: evaluate(state, payload.CompOperation),
          previousOperand: state.previousOperand,
          operation: state.operation,
        };
      }
  }
}
