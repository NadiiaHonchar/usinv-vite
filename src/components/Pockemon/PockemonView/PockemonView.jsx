import { useState } from "react";
import { PockemonForm } from "../PockemonForm/PockemonForm";
import { PockemonInfo } from "../PockemonInfo/PockemonInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLogOutRedirect } from "../../../hooks/useLogOutRedirect";

export default function PockemonView() {
  useLogOutRedirect();
  const [pockemonName, setPockemonName] = useState("");

  return (
    <>
      <PockemonForm onSubmit={setPockemonName} />
      <PockemonInfo pockemonName={pockemonName} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}
