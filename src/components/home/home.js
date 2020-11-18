import React from "react";
import "./home.css";
import icon1 from "../../asset/icon-home-1.png";
import icon2 from "../../asset/icon-home-2.png";
import icon3 from "../../asset/icon-home-3.png";

import Header from "../home-header/header";
import Kelas from "../kelas/kelas";

const HomeComponent = (props) => {
  return (
    <div className="home-menu">
      <br />
      <p className="judul-thumb">MENGAPA BELAJAR DI CROWD ACADEMY?</p>

      <div className="row">
        <div className="column">
          <div className="list-tujuan">
            <img src={icon1} alt="img-menu" className="img-thumb" />
            <p className="name-thumb">Akses Puluhan Kelas</p>
          </div>
        </div>
        <div className="column">
          <div className="list-tujuan">
            <img src={icon2} alt="img-menu" className="img-thumb" />
            <p className="name-thumb">100% Kelas Online</p>
          </div>
        </div>
        <div className="column">
          <div className="list-tujuan">
            <img src={icon3} alt="img-menu" className="img-thumb" />
            <p className="name-thumb">Diskusi dan Kolaborasi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
