import { combineReducers } from "redux";
import counterOneReducer from "./counterOne/counterOneReducer";
import counterTwoReducer from "./counterTwo/counterTwoReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  counterOne: counterOneReducer,
  counterTwo: counterTwoReducer,
  users: userReducer,
});

export default rootReducer;
