import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Collection = () => {
  const [item, setItem] = useState(["item-1", "item-2", "item-3", "item-4"]);
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionID = searchParams.get("collectionID");
  const visibleItem = item.filter((i) => i.includes(collectionID));
  return (
    <div>
      <input
        type="text"
        value={collectionID ? collectionID : ""}
        onChange={(e) => {
          setSearchParams;
          ({ collectionID: e.target.value });
        }}
      />
      {visibleItem.map((i) => {
        return (
          <Link key={i} to={`${i}`}>
            {i}
          </Link>
        );
      })}
    </div>
  );
};

export default Collection;
