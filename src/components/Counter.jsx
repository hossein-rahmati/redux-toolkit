import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../redux/counterReducer/counterActions";

function Counter() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> number: {state.number}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(decrement(value))}>decrese</button>
    </div>
  );
}

export default Counter;
