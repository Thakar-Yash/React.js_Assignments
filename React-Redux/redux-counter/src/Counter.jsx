import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <p className="counter-value">{count}</p>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())} className="counter-button increment">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="counter-button decrement">
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="counter-button reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
