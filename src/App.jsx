import { Provider } from "react-redux";
import store from "./redux/store.js";
import CounterOne from "./components/CounterOne.jsx";
import CounterTwo from "./components/CounterTwo.jsx";
import UsersList from "./components/UsersList.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <CounterOne />
      <CounterTwo />
      <hr />
      <UsersList />
    </Provider>
  );
}
