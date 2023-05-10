import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div>
      {["item-1", "item-2", "item-3", "item-4"].map((i) => {
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
