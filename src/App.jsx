import { useState } from "react";
import "./App.css";
import SingupForm from "./components/SignupForm/SignupForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Clock />
      <SingupForm />
      <ColorPicker options={colorPickerOptions} />
      <Counter initialValue={0} />
    </>
  );
}

export default App;
