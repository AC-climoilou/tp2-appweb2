import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Route path="/registration" exact component={Registration} />
    </Router>
  );
}

export default App;
