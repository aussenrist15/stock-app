import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <Link class="navbar-brand" exact to="/">
        Shahtaj Gold
      </Link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" exact to="/account">
            Accounts
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" exact to="/stocks">
            Stocks
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar