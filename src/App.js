// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import './App.css';

function App() {
  // const pathArray = window.location.pathname.split("/");
  // let basePath = "";

  // if (pathArray.length > 0) {
  //   pathArray.pop();
  //   basePath = pathArray.join("/");
  // };

  // const [pathState] = useState(basePath);

  return (
    // <Router basename={pathState}>
    <Router>
      <>
        <NavBar />
        <Switch>
          {/* <Route exact path="/About"><About /></Route>
          <Route exact path="/Portfolio"><Portfolio /></Route>
          <Route exact path="/Contact"><Contact /></Route> */}
          {/* <Route path="/*"><MainPage /></Route> */}
          <Route path="/" component={MainPage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;