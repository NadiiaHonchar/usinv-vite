import { CounterButton, CounterControls } from "./Counter.styled";

export default function Controls({ onIncrement, onDecrement }) {
  return (
    <CounterControls>
      <CounterButton onClick={onDecrement}>-1</CounterButton>
      <CounterButton onClick={onIncrement}>+1</CounterButton>
    </CounterControls>
  );
}
