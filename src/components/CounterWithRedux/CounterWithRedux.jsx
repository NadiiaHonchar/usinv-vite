import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/store";

const CounterWithRedux = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.myValue);
  return (
    <div>
      {value}
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </div>
  );
};
export default CounterWithRedux;
