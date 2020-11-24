import React from "react";

// import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PenggunaUmum from "../../penggunaUmum/penggunaUmum";
import Kelas from "../../kelas/pageKelas/pageKelas";
import Profile from "../../profile/profil";
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import DetailKelas from "../../kelas/detailKelas/detailKelas";
import Artikel from "../artikel/artikel";

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  console.log("nabar punya", userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/navbarumum");
  };

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
                  <Link className="nav-link" to={"/kelas"}>
                    Kategori Kelas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/artikel"}>
                    Artikel
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={logoutHandler}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={PenggunaUmum} />
          </Switch>
        </div>
        <Switch>
          <Route path="/home" component={PenggunaUmum} />
          <Route path="/kelas" component={Kelas} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/detailkelas" component={DetailKelas}></Route>
          <Route exact path="/artikel" component={Artikel}></Route>
        </Switch>
        <div className="footer"></div>
      </div>
    </Router>
  );
};

export default Navbar;
