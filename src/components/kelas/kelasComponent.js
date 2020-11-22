import React, { Fragment } from "react";



//import Kelas from "../../container/kelas/pageKelas/pageKelas";

//import Axios from "axios";

const KelasComponent = (props) => {
  return (
    
      <Fragment>
        <div className="header" id="kelaspemrograman">
          <p className="judul-header">Kelas Populer Pemrograman</p>
          <div className="row-pemrograman container">
            <div className="column-pemrograman">
              {/* <img src={icon1} alt="img-menu" className="img-thumb" /> */}
              <p className="judul-thumb">{props.title}</p>
               <p className="isi-thumb">{props.desc}</p>
              <button className="btn-thumb">
                Daftar Kelas
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    
  );
};

export default KelasComponent;
