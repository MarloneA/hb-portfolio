import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";
import AppRoutes from "./components/AppRoutes";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
}

export default App;
