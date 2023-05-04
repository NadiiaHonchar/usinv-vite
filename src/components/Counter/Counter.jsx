import { useEffect, useReducer, useRef, useState } from "react";
import { CounterValue, CounterWrapper } from "./Counter.styled";
import Controls from "./Controls";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      throw new Error()(`Unsupported action type ${action.type}`);
  }
}

export default function Counter({ initialValue }) {
  // const [value, setValue] = useState(initialValue);
  const [count, dispatch] = useReducer(countReducer, initialValue);

  // =====================================
  // Пропустити для першого рендера
  // const isFirstRender = useRef(true);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  // });
  // ========================================

  // const handleCounterDecrement = () => {
  //   setValue((state) => state - 1);
  // };

  // const handleCounterIncrement = () => {
  //   setValue((state) => state + 1);
  // };

  return (
    <CounterWrapper>
      <CounterValue>{count}</CounterValue>
      <Controls
        onClick={dispatch}
        // onIncrement={handleCounterIncrement}
        // onDecrement={handleCounterDecrement}
      ></Controls>
    </CounterWrapper>
  );
}
