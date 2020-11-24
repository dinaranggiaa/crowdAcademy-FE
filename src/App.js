import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarUmum from "./container/penggunaUmum/navbar/navbar";
import NavbarPelajar from "./container/pelajar/navbar/navbar";
import DetailKelas from "./container/kelas/detailKelas/detailKelas";
import DaftarKelas from "./container/kelas/daftarKelas/daftarKelas";
import DetailKelasUmum from"./container/penggunaUmum/kelas/detailKelas/detailKelas";
import DetailArikelUmum from "./container/penggunaUmum/artikel/detailArtikel";
//import NavbarPengajar from "./container/pengajar/navbar/navbar";

/*Navbar ada 3 : Navbar pelajar, Navbar pengajar dan Navbar umum*/
/*Navbar pelajar : Home, Kelas pemrograman*/
/*Navbar pengajar : Home, Kelas pemrograman, tambah artikel*/
/*Navbar umum : Home, Kelas pemrograman, artikel, daftar, masuk*/

import Register from "./container/signup/signup";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!!token ? (
            <Redirect to="/navbarpelajar" />
          ) : (
            <Redirect to="/navbarumum" />
          )}
        </Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/navbarumum" component={NavbarUmum}></Route>
        <Route exact path="/navbarpelajar" component={NavbarPelajar}></Route>
        <Route exact path="/kelas/detailkelas/:id" component={DetailKelas}></Route>
        <Route exact path="/kelas/detail_kelas/:id" component={DetailKelasUmum}></Route>
        <Route exact path="/kelas/detailkelas/daftarkelas/:id" component={DaftarKelas}></Route>

        <Route exact path="/artikel/detail_artikel/:id" component={DetailArikelUmum}></Route>
      </Switch>
    </Router>
  );
};

export default App;
