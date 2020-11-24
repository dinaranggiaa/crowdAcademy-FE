import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import icon1 from "../../asset/icon-php.png";

const KelasComponent = (kelas) => {
  return (
    <Fragment>
      <div className="header" id="kelaspemrograman">
        <p className="judul-header">Kelas Populer Pemrograman</p>
        <div className="row-pemrograman container">
          <div className="column-pemrograman">
            <Card>
              <Link to={`/props/${kelas.id}`}>
                <Card.Img src={icon1} className="img-thumb" />
                <Card />
              </Link>
            </Card>
            <Card.Body>
              <Link to={`/props/${kelas.title}`}>
                <Card.Title className="judul-thumb">
                  <p>{kelas.title}</p>
                </Card.Title>
              </Link>
            </Card.Body>
            {/* <p className="judul-thumb">{props.title}</p>
            <p className="isi-thumb">{props.desc}</p> */}
            <button className="btn-thumb">Daftar Kelas</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default KelasComponent;
