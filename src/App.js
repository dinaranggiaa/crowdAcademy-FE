import React from "react";

import "./App.css";
import PenggunaUmum from "./container/penggunaUmum/penggunaUmum";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./container/login/login";
import SignUp from "./container/signup/signup";
import Profil from "./container/profil/profil";

function App() {
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
                  <Link className="nav-link" to={"/home"}>
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
                <li className="nav-item">
                  <Link className="nav-link" to={"/profil"}>
                    Profil
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
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profil" component={Profil} />
          </Switch>
          {/* </div>
          </div> */}
        </div>
        <Switch>
          <Route path="/home" component={PenggunaUmum} />
        </Switch>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
