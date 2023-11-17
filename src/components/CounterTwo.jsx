import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTwo } from "../redux/counterTwo/counterTwoActions";

function CounterTwo() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.counterTwo);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> number: {state.number}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(decrementTwo(value))}>decrese</button>
    </div>
  );
}

export default CounterTwo;
