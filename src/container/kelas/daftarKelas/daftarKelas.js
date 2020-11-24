import React from "react";
import "./daftarKelas.css";
import icon1 from "../../../asset/icon-laravel.jpg";

const DaftarKelas = () => {
  return (
    <div className="container-daftar">
      <div className="box-daftar">
        <div className="row-daftar">
          <div className="column-gambar-daftar">
            <p className="font-judul">Kelas Laravel</p>
            <img src={icon1} className="img-thumb" />
          </div>
          <div className="column-gambar-daftar">
            <p className="font-judul">Detail Kelas</p>
            <p className="informasi-kelas-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ultrices enim sed magna commodo, eget facilisis tellus bibendum.
              Mauris vulputate ante a imperdiet molestie. Sed non bibendum dui.
              Nunc ultricies congue cursus. Phasellus consectetur justo finibus,
              tincidunt ex hendrerit, hendrerit erat. Nulla et pulvinar libero.
              Nullam ut urna ut lacus rutrum tincidunt vitae id dolor. Aenean
              vel justo eros. Nunc maximus feugiat mi, nec dictum dui.{" "}
            </p>
          </div>
        </div>
        <div className="row-daftar">
          <div className="column-gambar-daftar">
            <p className="font-judul">Jadwal</p>
          </div>
        </div>
        <div className="row-daftar">
          <div className="column-gambar-daftar">
            <p className="font-judul">Kelas Virtual : link</p>
          </div>
        </div>
        <div className="row-daftar">
          <div className="column-gambar-daftar">
            <p className="font-judul">Silabus : link</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarKelas;
