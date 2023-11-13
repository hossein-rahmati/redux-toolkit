import { Provider } from "react-redux";
import store from "./redux/store.js";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
