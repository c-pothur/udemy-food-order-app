import ReactDOM from "react-dom";
import AppContextProvider from "./Store/AppContextProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
