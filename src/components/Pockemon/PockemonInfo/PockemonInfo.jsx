import { useEffect, useState } from "react";
import { fetchPockemon } from "../../../services/pockemon-api";
import { PockemonDataView } from "../PockemonDataView/PockemonDataView";
import { ComponentPendingView } from "../ComponentPendigView/ComponentPendigView";
import { PockemonErrorView } from "../PockemonErrorView/PockemonErrorView";
import { useGetPokemonByNameQuery } from "../../../redux/pockemon/pockemon";

export function PockemonInfo({ pockemonName }) {
  // const [pockemon, setPockemon] = useState(null);
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState("idle");

  // if (pockemonName) {
  const { data, error, isFetching } = useGetPokemonByNameQuery(pockemonName, {
    skip: !pockemonName,
  });
  console.log(pockemonName);
  // }
  // useEffect(() => {
  //   if (!pockemonName) {
  //     return;
  //   }

  // setStatus("pending");
  // fetchPockemon(pockemonName)
  //   .then((pockemon) => {
  //     setPockemon(pockemon);
  //     setStatus("resolved");
  //   })
  //   .catch((error) => {
  //     setError(error);
  //     setStatus("rejected");
  //   });
  // }, [pockemonName]);

  // if (status === "idle") {
  //   return <div>Enter the Pokemon's name</div>;
  // }

  // if (status === "pending") {
  //   return <ComponentPendingView pockemonName={pockemonName} />;
  // }

  // if (status === "rejected") {
  //   return <PockemonErrorView message={error.message} />;
  // }
  // if (status === "resolved") {
  //   return <PockemonDataView pockemon={pockemon} />;
  // }
  return (
    <>
      {data && !isFetching && !error && <PockemonDataView pockemon={data} />}
      {error && <PockemonErrorView message={error.message} />}
      {isFetching && <ComponentPendingView pockemonName={pockemonName} />}
    </>
  );
}
