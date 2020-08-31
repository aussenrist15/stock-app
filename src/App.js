import React from "react";
import "./App.css";

import Stocks from "./Components/Stocks";
import Accounts from "./Components/Accounts";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Calculator from "./Components/Calculator";
import CalculatorContextProvider from "./Context/CalculatorContext";


function App() {
  return (
    <div>
      <CalculatorContextProvider>
      <Navbar className="navv" />
      <div className=" con">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={Accounts} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </div>
      </CalculatorContextProvider>
    </div>
  );
}

export default App;
