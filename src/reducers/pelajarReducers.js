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

export const kelasListReducer = (state = { kelas: [] }, action) => {
  switch (action.type) {
    case KELAS_LIST_REQUEST:
      return { loading: true, kelas: [] };
    case KELAS_LIST_SUCCESS:
      return {
        loading: false,
        kelas: action.payload,
      };
    case KELAS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const kelasDetailReducer = (state = { kelas: [] }, action) => {
  switch (action.type) {
    case KELAS_DETAIL_REQUEST:
      return { ...state, loading: true };
    case KELAS_DETAIL_SUCCESS:
      return { loading: false, kelas: action.payload };
    case KELAS_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const artikelListReducer = (state = { artikel: [] }, action) => {
  switch (action.type) {
    case ARTIKEL_LIST_REQUEST:
      return { loading: true, artikel: [] };
    case ARTIKEL_LIST_SUCCESS:
      return {
        loading: false,
        artikel: action.payload,
      };
    case ARTIKEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
