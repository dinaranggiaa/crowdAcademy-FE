import React, { Component } from "react";
import "./detailKelas.css";

export default class DetailKelas extends Component {
  render() {
    return (
      <div className="box-kelas">
        <div className="row-kelas">
          <div className="column-gambar">
            <p className="font-judul">Daftar Kelas</p>
            <img
              src="https://placeimg.com/320/430/tech"
              alt="img-menu"
              className="gambar-kelas"
            />
          </div>
          <div className="column-informasi">
            <p className="font-judul">Judul Kelas</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ultrices enim sed magna commodo, eget facilisis tellus bibendum.
              Mauris vulputate ante a imperdiet molestie. Sed non bibendum dui.
              Nunc ultricies congue cursus. Phasellus consectetur justo finibus,
              tincidunt ex hendrerit, hendrerit erat. Nulla et pulvinar libero.
              Nullam ut urna ut lacus rutrum tincidunt vitae id dolor. Aenean
              vel justo eros. Nunc maximus feugiat mi, nec dictum dui. Curabitur
              lobortis convallis diam, eget porttitor tellus tristique sit amet.
              Donec vitae neque pulvinar, accumsan arcu nec, bibendum velit.
              Suspendisse quam felis, consequat a laoreet vel, mollis nec nulla.
              Suspendisse sit amet ipsum augue. Mauris consectetur venenatis
              blandit. Jadwal kelas :
            </p>
            <button className="btn btn-warning">Daftar Kelas</button>
          </div>
        </div>
      </div>
    );
  }
}
