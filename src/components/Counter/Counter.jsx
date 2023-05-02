import { useEffect, useRef, useState } from "react";
import { CounterValue, CounterWrapper } from "./Counter.styled";
import Controls from "./Controls";

export default function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue);

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

  const handleCounterDecrement = () => {
    setValue((state) => state - 1);
  };

  const handleCounterIncrement = () => {
    setValue((state) => state + 1);
  };

  return (
    <CounterWrapper>
      <CounterValue>{value}</CounterValue>
      <Controls
        onIncrement={handleCounterIncrement}
        onDecrement={handleCounterDecrement}
      ></Controls>
    </CounterWrapper>
  );
}
