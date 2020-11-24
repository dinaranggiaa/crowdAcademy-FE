import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailKelas } from "../../../actions/pelajarActions";
import "./detailKelas.css";

const DetailKelas = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const kelasDetail = useSelector((state) => state.kelasDetail);
  const { kelas } = kelasDetail;
  const { token } = userLogin;
  console.log("detil", kelasDetail);

  useEffect(() => {
    if (token) {
      dispatch(detailKelas());
    }
  }, [dispatch, history, token]);

  return (
    <Fragment>
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
            <p className="font-judul">{kelas.judul_kelas}</p>
            <p>{kelas.detail_kelas}</p>
            <Link to={`/kelas/detailkelas/daftarkelas/${kelas.id}`}>
              <button className="btn btn-warning">Daftar Kelas</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DetailKelas;
