import React from "react";

import Header from "../../components/home-header/header";
import Home from "../../components/home/home";
import Kelas from "../../components/kelas/kelasPemrograman";

function PenggunaUmum() {
  return (
    <div>
      <Header />
      <Home />
      <Kelas />
      <Kelas />
    </div>
  );
}

export default PenggunaUmum;
