import React from "react";
import "./App.css";

import Stocks from "./Components/Stocks";
import Accounts from "./Components/Accounts";
import Navbar from "./Components/Navbar";
import { Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Navbar className="navv" />
      <div className=" con">
        <Route exact path="/" component={Home}/>
        <Route path="/account" component={Accounts} />
        <Route path="/stocks" component={Stocks} />
      </div>
      
    </div>
  );
}

export default App;
