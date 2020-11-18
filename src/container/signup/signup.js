import React, { Component } from "react";
import "./signup.css";

export default class SignUp extends Component {
  render() {
    return (
      <div className="box-form">
        <div className="box-row">
          <div className="box-column">
            <form>
              <h3>Daftar</h3>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama Lengkap"
                />
              </div>

              <div className="form-group">
                <label>Level</label>
                {/* // <input type="text" className="form-control" placeholder="Level" /> */}
                <select
                  class="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                >
                  <option selected>Pilih...</option>
                  <option value="1">Pelajar</option>
                  <option value="2">Pengajar</option>
                </select>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan Email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Daftar
              </button>
              <p className="forgot-password text-right">
                Sudah memiliki akun <a href="#">masuk?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
