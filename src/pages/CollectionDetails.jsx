import { useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CollectionDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/collection");
  const { collectionID } = useParams();
  return (
    <>
      <Link to={backLinkLocationRef.current}>Back page</Link>
      <div>CollectionDetails: {collectionID}</div>
    </>
  );
};
export default CollectionDetails;
