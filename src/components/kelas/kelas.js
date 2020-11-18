import React from "react";
import "./kelas.css";

const MenuComponent = (props) => {
  return (
    <div className="list-menu">
      <img
        src="https://www.themealdb.com/images/media/meals/1548772327.jpg"
        alt="img-menu"
        className="img-thumb"
      />
      <p className="name-thumb">Nama Menu</p>
      
    </div>
  );
};

export default MenuComponent;
