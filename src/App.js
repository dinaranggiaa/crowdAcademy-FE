import React from "react";

import "./App.css";
import NavbarUmum from "./container/penggunaUmum/navbar/navbar";
//import NavbarPelajar from "./container/pelajar/navbar/navbar";
//import NavbarPengajar from "./container/pengajar/navbar/navbar";

/*Navbar ada 3 : Navbar pelajar, Navbar pengajar dan Navbar umum*/
/*Navbar pelajar : Home, Kelas pemrograman*/
/*Navbar pengajar : Home, Kelas pemrograman, tambah artikel*/
/*Navbar umum : Home, Kelas pemrograman, artikel, daftar, masuk*/

function App() {
  return <NavbarUmum/>;
}

export default App;
