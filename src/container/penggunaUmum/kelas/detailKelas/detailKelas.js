import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailKelasumum } from "../../../../actions/userActions";
import "./detailKelas.css";

const DetailKelas = ({ history }) => {
  const dispatch = useDispatch();

  const kelasDetailUmum = useSelector((state) => state.kelasDetailUmum);
  //const { kelas } = kelasDetailUmum;

  console.log("detil", kelasDetailUmum);

  useEffect(() => {
    dispatch(detailKelasumum());
  }, [dispatch, history]);

  return (
    <Fragment>
      <div className="box-kelas">
        <div className="row-kelas">
          <div className="column-gambar">
            <p className="font-judul">Detail Kelas</p>
            <img
              src="https://placeimg.com/320/430/tech"
              alt="img-menu"
              className="gambar-kelas"
            />
          </div>
          <div className="column-informasi">
            <p className="font-judul">Laravel</p>
            <p>Membuat Website dengan Framework Laravel - Dengan Studi Kasus</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DetailKelas;
