import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

import Login from "./Login";

function Home() {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth, theUser} = rootState;

  // If user Logged in
  if (isAuth) {
    return (
      <div className="userInfo">
        <div className="_img">
          <span role="img" aria-label="User Image">
            👦
          </span>
        </div>
        <h1>{theUser.name}</h1>
        <div className="_email">
          <span>{theUser.email}</span>
        </div>
        <button onClick={logoutUser}>Logout</button>
      </div>
    );
  }
  return <Login />;
}

export default Home;
