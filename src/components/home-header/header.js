import React from "react";
import "./header.css";

const HeaderComponent = (props) => {
  return (
    <div className="header-home">
      <span className="header-judul">
        Belajar Pemrograman dan Desain Grafis <br></br>dengan<br></br>Materi
        Terstruktur dan Tanpa Bingung
      </span>
      <div className="line">
        <hr></hr>
      </div>
      <p className="header-subjudul">
        Crowd Academy merupakan sebuah platform kelas online yang membantu kamu
        <br></br>
        memperoleh ilmu pemrograman dan desain grafis dengan mudah dan
        fleksibel.
      </p>
    </div>
  );
};

export default HeaderComponent;
