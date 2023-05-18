import { Link, useLocation, useParams } from "react-router-dom";

const CollectionDetails = () => {
  const location = useLocation();
  const { collectionID } = useParams();
  return (
    <>
      <Link to={location.state.from}>Back page</Link>
      <div>CollectionDetails: {collectionID}</div>
    </>
  );
};
export default CollectionDetails;
