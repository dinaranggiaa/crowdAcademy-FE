import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./login.css";

const MySwal = withReactContent(Swal);

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { error, token } = userLogin;

  useEffect(() => {
    if (token) {
      history.push("/navbarpelajar");
      console.log(token);
    }
  }, [history, token]);

  useEffect(() => {
    if (error && error !== undefined) {
      MySwal.fire({
        icon: "error",
        title: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setPassword("");
          setPassword("");
        }
      });
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="box-form">
      <div className="box-row">
        <div className="box-column">
          <Form onSubmit={submitHandler}>
            <h3>Masuk</h3>
            <Form.Group controlId="name" className="form-group">
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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Ingat saya
                </label>
              </div>
            </div>

            <Button type="submit" variant="default" className="btn btn-primary">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
