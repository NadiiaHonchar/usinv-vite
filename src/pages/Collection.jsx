import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Collection = () => {
  const [item, setItem] = useState(["item-1", "item-2", "item-3", "item-4"]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const collectionID = searchParams.get("collectionID") ?? "";
  const updateQueryString = (e) => {
    e.target.value
      ? setSearchParams({ collectionID: e.target.value })
      : setSearchParams({});
  };
  const visibleItem = item.filter((i) => i.includes(collectionID));
  return (
    <div>
      <input type="text" value={collectionID} onChange={updateQueryString} />
      {visibleItem.map((i) => {
        return (
          <>
            <Link key={i} state={{ from: location }} to={`${i}`}>
              {i}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Collection;
