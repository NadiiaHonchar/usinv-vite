import { useState } from "react";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";

export function PockemonForm({ onSubmit }) {
  const [pockemonName, setPockemonName] = useState("");

  const handleNameChange = (e) => {
    setPockemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pockemonName.trim() === "") {
      toast("Enter the pokemon's name, please", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    onSubmit(pockemonName);
    setPockemonName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pockemonName"
        value={pockemonName}
        onChange={handleNameChange}
      ></input>
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  );
}
