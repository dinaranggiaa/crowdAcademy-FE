import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { artikelListUmumReducer, kelasListUmumReducer, kelasUmumDetailReducer, userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { artikelListReducer, kelasDetailReducer, kelasListReducer } from "./reducers/pelajarReducers";

const reducer = combineReducers({
  userLogin     : userLoginReducer,
  userRegiter   : userRegisterReducer,
  kelasList     : kelasListReducer,
  kelasDetail   : kelasDetailReducer,
  artikelList     : artikelListReducer,
  kelasListUmum : kelasListUmumReducer,
  kelasDetailUmum : kelasUmumDetailReducer,
  artikelListUmum : artikelListUmumReducer
});

const userInfoFromStorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  userLogin: { token: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
