import React, { Component, Fragment } from "react";
//import icon1 from "../../../asset/icon-php.png";
// import icon2 from "../../../asset/icon-laravel.jpg";
// import icon3 from "../../../asset/icon-mysql.png";
import { BrowserRouter } from "react-router-dom";
//import DetailKelas from "../../container/kelas/detailKelas/detailKelas";
//import KelasComponent from "../../../components/kelas/kelasPemrograman";
import "./pageKelas.css";
import KelasComponent from "../../../components/kelas/kelasComponent";

export default class PageKelas extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    const url = "http://localhost:4000/api/umum/topik";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          post: json,
        });
      });
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          {this.state.post.map((post) => {
            return (
              <KelasComponent
                key={post.id}
                title={post.nama_topik}
                desc={post.nama_topik}
              />
            );
          })
          }
        </Fragment>
      </BrowserRouter>
    );
  }
}
