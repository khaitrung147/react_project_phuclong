import React from "react";
import "./Login.css";
import logo from "./images/logo.png";
import firebase from "firebase";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.Email = React.createRef();
    this.Password = React.createRef();
  }
  SignIn = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.Email.current.value,
        this.Password.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        sessionStorage.uid = user.uid
        this.props.history.push('/admin')
        // ...
      })
      .catch((error) => {

        var errorCode = error.code;
        var errorMessage = error.message;
      });
    e.preventDefault();
  };
  render() {
    return (
      <div
        className="login text-center w-100 py-5 row justify-content-center"
        onSubmit={this.SignIn}
      >
        <main className="form-signin my-5 col-3">
          <form>
            <Link to="/">
              <img className="mb-4" src={logo} alt="" />
            </Link>
            <h1 className="h4 fw-bold mb-3 fw-normal">ĐĂNG NHẬP</h1>
            <div className="form-floating">
              <input
                ref={this.Email}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Tài khoản</label>
            </div>
            <div className="form-floating">
              <input
                ref={this.Password}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Mật khẩu</label>
            </div>
            <button className="w-100 mt-5 btn btn-lg btn-success" type="submit">
              Đăng nhập
            </button>
            <button
              className="w-100 mt-2 btn btn-lg btn-primary d-none"
              type="submit"
            >
              <i className="fab fa-google mx-2" />
              Google
            </button>
          </form>
        </main>
      </div >
    );
  }
}

export default Login;
