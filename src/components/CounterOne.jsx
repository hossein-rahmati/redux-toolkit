import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementOne } from "../redux/counterOne/counterOneActions";

function CounterOne() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.counterOne);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> number: {state.number}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(decrementOne(value))}>decrese</button>
    </div>
  );
}

export default CounterOne;
