import React from "react";
import "./home.css";
import icon1 from "../../asset/icon-home-1.png";
import icon2 from "../../asset/icon-home-2.png";
import icon3 from "../../asset/icon-home-3.png";

const HomeComponent = (props) => {
  return (
    <div className="home-menu">
      <p className="home-judul">MENGAPA BELAJAR DI CROWD ACADEMY?</p>
      <br></br>
      <div className="row">
        <div className="column">
          <img src={icon1} alt="img-menu" className="img-thumb" />
          <p className="name-thumb">Akses Puluhan Kelas</p>
        </div>
        <div className="column">
          <img src={icon2} alt="img-menu" className="img-thumb" />
          <p className="name-thumb">100% Kelas Online</p>
        </div>
        <div className="column">
          <img src={icon3} alt="img-menu" className="img-thumb" />
          <p className="name-thumb">Akses Puluhan Kelas</p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
