import { PockemonDataView } from "../PockemonDataView/PockemonDataView";
import loadingImages from "../img/cartoon-snail-loading-loading-gif-animation_2734139.jpg";
export function ComponentPendingView({ pockemonName }) {
  const pockemon = {
    name: pockemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: loadingImages,
        },
      },
    },
    stats: [],
  };
  return (
    <div role="alert">
      <img src={loadingImages} width="300" alt="sad" />
      <p>Loading ...</p>
      <PockemonDataView pockemon={pockemon} />
    </div>
  );
}
