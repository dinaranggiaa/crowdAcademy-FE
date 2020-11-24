import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import { listArtikelumum } from "../../../actions/userActions";
import icon1 from "../../../asset/icon-home-1.png";

const PageArtikel = ({ history }) => {
  const dispatch = useDispatch();
  const artikelListUmum = useSelector((state) => state.artikelListUmum);
  console.log("artikel", artikelListUmum);

  const { artikel } = artikelListUmum;
  console.log("list", artikel);

  useEffect(() => {
    dispatch(listArtikelumum());
  }, [dispatch, history]);

  return (
    <BrowserRouter>
      <Fragment>
        <div className="header" id="kelaspemrograman">
          <br></br>
          <p className="judul-header">Artikel</p>
          <div className="row-pemrograman container">
            {artikel.map((row) => (
              <div className="column-pemrograman" key={row.id}>
                <img src={icon1} alt="img-menu" className="img-thumb" />
                <p className="judul-thumb">{row.judul_artikel}</p>
                <p className="isi-thumb">{row.nama_penulis}</p>
                <Link to={`/artikel/detail_artikel/${row.id}`}>
                  <button className="btn-thumb">selanjutnya..</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default PageArtikel;
