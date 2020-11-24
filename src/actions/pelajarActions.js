import axios from "axios";
import {
  KELAS_LIST_REQUEST,
  KELAS_LIST_SUCCESS,
  KELAS_LIST_FAIL,

  KELAS_DETAIL_REQUEST,
  KELAS_DETAIL_SUCCESS,
  KELAS_DETAIL_FAIL,

  ARTIKEL_LIST_REQUEST,
  ARTIKEL_LIST_SUCCESS,
  ARTIKEL_LIST_FAIL,
} from "../constants/pelajarConstant";

export const listKelas = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: KELAS_LIST_REQUEST,
    });

    const {
      userLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "access-token": `${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/pelajar/buat_kelas`,
      config
    );
    
    dispatch({
      type: KELAS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KELAS_LIST_FAIL,
      payload: "gagal",
    });
  }
};

export const detailKelas = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: KELAS_DETAIL_REQUEST,
    });

    const {
      userLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "access-token": `${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/pelajar/buat_kelas/1`,
      //`http://localhost:4000/api/pelajar/buat_kelas/${id}`,
      config
    );
    
    dispatch({
      type: KELAS_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KELAS_DETAIL_FAIL,
      payload: "gagal",
    });
  }
};

export const listartikel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIKEL_LIST_REQUEST,
    });

    const {
      userLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "access-token": `${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:4000/api/pelajar/artikel`,
      config
    );
    
    dispatch({
      type: ARTIKEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIKEL_LIST_FAIL,
      payload: "gagal",
    });
  }
};