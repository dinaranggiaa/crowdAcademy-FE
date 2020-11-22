import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import "./signup.css";

const SignUp = ({ setLogginActive }) => {

  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");

  const [level, setLevel] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(namaDepan, namaBelakang, level, email, password));
  }

  return (
    <div className="box-form">
      <div className="box-row">
        <div className="box-column">
          <Form className="form" onSubmit={submitHandler}>
            <Form.Group controlId="namaDepan" className="form-group">
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control
                value={namaDepan}
                required
                onChange={(e) => setNamaDepan(e.target.value)}
                type="text"
                name="namaDepan"
                placeholder="nama depan"
              />
            </Form.Group>
            <Form.Group controlId="namaBelakang" className="form-group">
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control
                value={namaBelakang}
                required
                onChange={(e) => setNamaBelakang(e.target.value)}
                type="text"
                name="namaBelakang"
                placeholder="nama belakang"
              />
            </Form.Group>
            <Form.Group controlId="namaBelakang" className="form-group">
              <Form.Label>Level</Form.Label>
              <Form.Control
                value={level}
                required
                onChange={(e) => setLevel(e.target.value)}
                type="text"
                name="level"
              />
            </Form.Group>
            <Form.Group controlId="email" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="email"
              />
            </Form.Group>
            <Form.Group controlId="password" className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Group controlId="password" className="form-group">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="konfirmasi password"
              />
            </Form.Group>
            <div className="footer">
              <Button type="submit" variant="default" className="btn">
                Register
              </Button>
            </div>
          </Form>
          {/* <form>
            <h3>Daftar</h3>
            <div className="form-group">
              <label>Nama Depan</label>
              <input
                type="text"
                className="form-control"
                placeholder="nama depan"
              />
            </div>
            <div className="form-group">
              <label>Nama Belakang</label>
              <input
                type="text"
                className="form-control"
                placeholder="nama belakang"
              />
            </div>

            <div className="form-group">
              <label>Level</label>
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

            <div className="form-group">
              <label>Konfirmasi Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukkan password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Daftar
            </button>
           
          </form> */}
           <p className="forgot-password text-right">
              Sudah memiliki akun <a href="#">masuk?</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
