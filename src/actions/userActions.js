import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  
  USER_KELAS_FAIL,
  USER_KELAS_REQUEST,
  USER_KELAS_SUCCESS,
  USER_KELAS_DETAIL_REQUEST,
  USER_KELAS_DETAIL_SUCCESS,
  USER_KELAS_DETAIL_FAIL,

  USER_ARTIKEL_FAIL,
  USER_ARTIKEL_REQUEST,
  USER_ARTIKEL_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.accessToken,
    });

    localStorage.setItem("token", data.accessToken);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      // @TODO fix the error
      payload: error.response.data.message,
    });
  }
};

export const register = (
  namaDepan,
  namaBelakang,
  level,
  email,
  password
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/register",
      {
        nama_depan: namaDepan,
        nama_belakang: namaBelakang,
        level: level,
        email: email,
        password: password,
      },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.status,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      // @TODO fix the error
      payload: "error",
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const listKelasumum = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_KELAS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/umum/kelas`,
      config
    );

    dispatch({
      type: USER_KELAS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_KELAS_FAIL,
      payload: "gagal",
    });
  }
};

export const detailKelasumum = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_KELAS_DETAIL_REQUEST,
    });


    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/umum/kelas/1`,
      //`http://localhost:4000/api/pelajar/buat_kelas/${id}`,
      config
    );
    
    dispatch({
      type: USER_KELAS_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_KELAS_DETAIL_FAIL,
      payload: "gagal",
    });
  }
};

export const listArtikelumum = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_ARTIKEL_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/umum/artikel`,
      config
    );

    dispatch({
      type: USER_ARTIKEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ARTIKEL_FAIL,
      payload: "gagal",
    });
  }
};

