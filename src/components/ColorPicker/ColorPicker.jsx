import { useState } from "react";
import { useLogOutRedirect } from "../../hooks/useLogOutRedirect";

export default function ColorPicker({ options }) {
  useLogOutRedirect();
  const [activeOptionsIndex, setActiveOptionsIndex] = useState(0);

  const { label } = options[activeOptionsIndex];

  return (
    <div>
      <h2>Color Picker</h2>
      <p>Selected color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionsIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
