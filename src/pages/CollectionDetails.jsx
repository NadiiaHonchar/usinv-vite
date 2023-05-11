import { useParams } from "react-router-dom";

const CollectionDetails = () => {
  const { collectionID } = useParams();
  return <div>CollectionDetails: {collectionID}</div>;
};
export default CollectionDetails;
