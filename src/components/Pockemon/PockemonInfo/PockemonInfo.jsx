// import { ComponentPendingView } from "components/ComponentPendigView";
// import { PockemonErrorView } from "components/PockemonErrorView";
import { useEffect, useState } from "react";
import { fetchPockemon } from "../../../services/pockemon-api";
import { PockemonDataView } from "../PockemonDataView/PockemonDataView";

export function PockemonInfo({ pockemonName }) {
  const [pockemon, setPockemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!pockemonName) {
      return;
    }
    setStatus("pending");
    fetchPockemon(pockemonName)
      .then((pockemon) => {
        setPockemon(pockemon);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [pockemonName]);

  if (status === "idle") {
    return <div>Enter the Pokemon's name</div>;
  }

  if (status === "pending") {
    return <ComponentPendingView pockemonName={pockemonName} />;
  }

  // if (status === "rejected") {
  //   return <PockemonErrorView message={error.message} />;
  // }
  if (status === "resolved") {
    return <PockemonDataView pockemon={pockemon} />;
  }
}
