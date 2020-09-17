import React from "react";
import "./App.css";

import Stocks from "./Components/Stocks";
import Accounts from "./Components/Accounts";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Calculator from "./Components/Calculator";
import CalculatorContextProvider from "./Context/CalculatorContext";
import StockContextProvider from "./Context/StockContext";
import { TotalStock } from "./Components/TotalStock";

function App() {
  return (
    <div>
      <StockContextProvider>
        <CalculatorContextProvider>
          <Navbar className="navv" />
          <div className=" con">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/account" component={Accounts} />
              <Route path="/stocks" component={Stocks} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/total-stock" component={TotalStock} />
            </Switch>
          </div>
        </CalculatorContextProvider>
      </StockContextProvider>
    </div>
  );
}

export default App;
