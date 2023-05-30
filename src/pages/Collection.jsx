import { Suspense, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { useLogOutRedirect } from "../hooks/useLogOutRedirect";

const Collection = () => {
  useLogOutRedirect();
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
    <>
      <input type="text" value={collectionID} onChange={updateQueryString} />
      {visibleItem.map((i) => {
        return (
          <div key={i}>
            <Link state={{ from: location }} to={`${i}`}>
              {i}
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default Collection;
