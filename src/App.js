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
import {
  CustomerContext,
  CustomerContextProvider,
} from "./Context/CustomerContext";
import { Customer } from "./Components/Customer";
import { Transaction } from "./Components/Transaction";

function App() {
  return (
    <div>
      <CustomerContextProvider>
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
                <Route
                  path="/Accounts/SingleCustomer/:id"
                  component={Customer}
                ></Route>
                <Route
                  path="/Accounts/Transactions/:id"
                  component={Transaction}
                ></Route>
              </Switch>
            </div>
          </CalculatorContextProvider>
        </StockContextProvider>
      </CustomerContextProvider>
    </div>
  );
}

export default App;
