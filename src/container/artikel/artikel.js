import React, { Component, Fragment } from "react";


export default class Artikel extends Component {
  render() {
    return (
      <Fragment>
        <div className="header" id="kelaspemrograman">
          <br></br>
          <br></br>
          <p className="judul-header">Artikel </p>
          <div className="row-pemrograman container">
            <div className="column-pemrograman">
              {/* <img src={icon1} alt="img-menu" className="img-thumb" /> */}
              <p className="judul-thumb">Judul</p>
               <p className="isi-thumb">Isi</p>
              <button className="btn-thumb">
                selengkapnya..
              </button>
            </div>
            <div className="column-pemrograman">
              {/* <img src={icon1} alt="img-menu" className="img-thumb" /> */}
              <p className="judul-thumb">Judul</p>
               <p className="isi-thumb">Isi</p>
              <button className="btn-thumb">
              selengkapnya..
              </button>
            </div>
            <div className="column-pemrograman">
              {/* <img src={icon1} alt="img-menu" className="img-thumb" /> */}
              <p className="judul-thumb">Judul</p>
               <p className="isi-thumb">Isi</p>
              <button className="btn-thumb">
              selengkapnya..
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
