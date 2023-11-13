import { combineReducers } from "redux";
import counterOneReducer from "./counterOneReducer/counterOneReducer";
import counterTwoReducer from "./counterTwoReducer/counterTwoReducer";

const rootReducer = combineReducers({
  counterOne: counterOneReducer,
  counterTwo: counterTwoReducer,
});

export default rootReducer;
