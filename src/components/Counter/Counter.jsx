import { useState } from "react";
import { CounterValue, CounterWrapper } from "./Counter.styled";
import Controls from "./Controls";

export default function Counter({ initialValue }) {
  const [value, setValue] = useState(initialValue);

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
