import React, { Component } from "react";
import KelasComponent from "../../../components/kelas/kelasPemrograman";
import "./pageKelas.css";

export default class PageKelas extends Component {
  render() {
    return (
      <div className="box-form">
        <div className="box-row container">
          <div className="box-column container ">
            <br></br>
            <br></br>
            <br></br>
            <input
              type="text"
              className="form-control"
              placeholder="Cari Kelas"
            />
            <br></br>
            <br></br>
            <br></br>
            <KelasComponent />
            <KelasComponent />
          </div>
        </div>
      </div>
    );
  }
}
