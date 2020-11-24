import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_STATUS_RESET,

  USER_KELAS_FAIL,
  USER_KELAS_REQUEST,
  USER_KELAS_SUCCESS,

  USER_KELAS_DETAIL_REQUEST,
  USER_KELAS_DETAIL_SUCCESS,
  USER_KELAS_DETAIL_FAIL,
  USER_ARTIKEL_REQUEST,
  USER_ARTIKEL_SUCCESS,
  USER_ARTIKEL_FAIL



} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, token: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};


export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, status: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, status: action.payload };
    case USER_REGISTER_STATUS_RESET:
      return { loading: false, status: null };
    default:
      return state;
  }
};

export const kelasListUmumReducer = (state = { kelas: [] }, action) => {
  switch (action.type) {
    case USER_KELAS_REQUEST:
      return { loading: true, kelas: [] };
    case USER_KELAS_SUCCESS:
      return {
        loading: false,
        kelas: action.payload,
      };
    case USER_KELAS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const kelasUmumDetailReducer = (state = { kelas: [] }, action) => {
  switch (action.type) {
    case USER_KELAS_DETAIL_REQUEST:
      return { ...state, loading: true };
    case USER_KELAS_DETAIL_SUCCESS:
      return { loading: false, kelas: action.payload };
    case USER_KELAS_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const artikelListUmumReducer = (state = { artikel: [] }, action) => {
  switch (action.type) {
    case USER_ARTIKEL_REQUEST:
      return { loading: true, artikel: [] };
    case USER_ARTIKEL_SUCCESS:
      return {
        loading: false,
        artikel: action.payload,
      };
    case USER_ARTIKEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

