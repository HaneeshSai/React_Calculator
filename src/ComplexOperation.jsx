import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, CompOperation }) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: ACTIONS.COMPLEX_OPERATION,
          payload: { CompOperation },
        })
      }
    >
      {CompOperation}
    </button>
  );
}
