import React from "react";
import "./kelas.css";
import icon1 from "../../asset/icon-php.png";
import icon2 from "../../asset/icon-laravel.jpg";
import icon3 from "../../asset/icon-mysql.png";
import { useHistory } from "react-router-dom";

const KelasPemrograman = () => {
  const history = useHistory();
  const navigateTo = () => history.push("/detailKelas");

  return (
    <div className="header" id="kelaspemrograman">
      <p className="judul-header">Kelas Populer Pemrograman</p>
      <div className="row-pemrograman container">
        <div className="column-pemrograman">
          <img src={icon1} alt="img-menu" className="img-thumb" />
          <p className="judul-thumb">PHP</p>
          <p className="isi-thumb">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <button onClick={navigateTo} className="btn-thumb">
            Daftar Kelas
          </button>
        </div>
        <div className="column-pemrograman">
          <img src={icon2} alt="img-menu" className="img-thumb" />
          <p className="judul-thumb">Laravel</p>
          <p className="isi-thumb">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <button onClick={navigateTo} className="btn-thumb">
            Daftar Kelas
          </button>
        </div>
        <div className="column-pemrograman">
          <img src={icon3} alt="img-menu" className="img-thumb" />
          <p className="judul-thumb">MySQL</p>
          <p className="isi-thumb">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
          <button onClick={navigateTo} className="btn-thumb">
            Daftar Kelas
          </button>
        </div>
      </div>
    </div>
  );
};

export default KelasPemrograman;
