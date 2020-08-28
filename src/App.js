import React from 'react';
import './App.css';

import Stocks from './Components/Stocks'
import Accounts from './Components/Accounts'
import { Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>
        Hello World 
      </h1>

      <button><NavLink exact to='/account'> Accounts </NavLink></button>
      <button><NavLink exact to='/stocks'> Stocks </NavLink></button>

      <Route  path='/account' component={Accounts} />
      <Route  path='/stocks' component= {Stocks} />
      

    </div>
  );
}

export default App;
