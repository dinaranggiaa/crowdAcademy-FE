import React, { createContext, Component } from "react";
import axios from "axios";
import { login } from "../actions/userActions";
export const MyContext = createContext();

const Axios = axios.create({
  baseURL: "http://localhost:4000/users/authenticate",
});

class MyContextProvider extends Component {
  constructor() {
    super();
    this.isLoggedIn();
  }

  state = {
    showLogin: true,
    isAuth: false,
    theUser: null,
  };

  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  logoutUser = () => {
    localStorage.removeItem("loginToken");
    this.setState({
      ...this.state,
      isAuth: false,
    });
  };

  loginUser = async (user) => {
    const login = await Axios.post("/localhost:4000/users/authenticate", {
      email: user.email,
      password: user.password,
    });
    return login.data;
  };

  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");

    if (loginToken) {
      Axios.defaults.headers.common["Authorization"] = "bearer" + loginToken;

      const { data } = await Axios.get("http://localhost:4000/users/");

      if (data.success && data.user) {
        this.setState({
          ...this.state,
          isAuth: true,
          theUser: data.user,
        });
      }
    }
  };

  render() {
    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      isLoggedIn: this.isLoggedIn,
      loginUser: this.loginUser,
      logoutUser: this.loginUser,
    };

    return (
      <MyContext.Provider value={contextValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContextProvider;


