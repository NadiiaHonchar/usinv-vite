import { useParams } from "react-router-dom";

const CollectionDetails = () => {
  const { collectionID } = useParams();
  console.log(collectionID);
  return <div>CollectionDetails: {collectionID}</div>;
};
export default CollectionDetails;
