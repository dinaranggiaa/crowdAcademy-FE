import React from "react";

// import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PenggunaUmum from "../penggunaUmum";
import Artikel from "../../artikel/artikel";
import Login from "../../login/login";
import SignUp from "../../signup/signup";

function Navbar() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Crowd Academy
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#kelaspemrograman">
                    Kelas Pemrograman
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/artikel"}>
                    Artikel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Masuk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Daftar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {/* <div className="auth-wrapper">
            <div className="auth-inner"> */}
          <Switch>
            <Route exact path="/" component={PenggunaUmum} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          {/* </div>
          </div> */}
        </div>
        <Switch>
          <Route path="/home" component={PenggunaUmum} />
          <Route path="/artikel" component={Artikel} />
        </Switch>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default Navbar;
