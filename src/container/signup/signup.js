import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import "./signup.css";

const SignUp = ({ setLogginActive }) => {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");

  const [level] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(namaDepan, namaBelakang, level, email, password));
  };

  return (
    <div className="box-form">
      <div className="box-row">
        <div className="box-column">
          <Form className="form" onSubmit={submitHandler}>
            <table>
              <tr>
                <td>
                  {" "}
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
                </td>
                <td>
                  {" "}
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
                </td>
              </tr>
            </table>
            <div className="form-group">
              <label>Level</label>
              <select
                class="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
              >
                <option selected>Pilih...</option>
                <option value={level}>Pelajar</option>
                <option value={level}>Pengajar</option>
              </select>
            </div>
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
            <Button type="submit" variant="default" className="btn btn-primary">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
