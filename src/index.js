import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import configureStore from "./components/store/store";
import AppRouter from "./router";

const store = configureStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
