import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./pageKelas.css";
import { useDispatch, useSelector } from "react-redux";
import { listKelas } from "../../../actions/pelajarActions";
import { listKelasumum } from "../../../actions/userActions";
import icon1 from '../../../asset/icon-home-1.png';

const PageKelas = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const kelasList = useSelector((state) => state.kelasList);

  const { token } = userLogin;
  const { kelas } = kelasList;

  console.log("userlogin katanya", token);
  console.log("kelas katanya", kelas);

  useEffect(() => {
    if (token) {
      dispatch(listKelas());
    } else {
      dispatch(listKelasumum);
    }
  }, [dispatch, history, token]);

  return (
    <BrowserRouter>
      <Fragment>
        <div className="header" id="kelaspemrograman">
          <br></br>
          <br></br>
          <br></br>
          <p className="judul-header">Kelas Populer Pemrograman</p>
          <div className="row-pemrograman container">
            {kelas.map((row) => (
              <div className="column-pemrograman" key={row._id}>
                <img src={icon1} alt="img-menu" className="img-thumb" />
                <p className="judul-thumb">{row.judul_kelas}</p>
                <p className="isi-thumb">{row.detail_kelas}</p>

                <Link to={`/kelas/detailkelas/${row.id}`}>
                  <button className="btn-thumb">Daftar Kelas</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default PageKelas;
