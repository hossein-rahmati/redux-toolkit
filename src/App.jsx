import { Provider } from "react-redux";
import store from "./features/store.js";
import CounterOne from "./components/Counter.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <CounterOne />
      {/* <UsersList /> */}
    </Provider>
  );
}
