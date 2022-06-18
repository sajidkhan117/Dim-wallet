import React from "react";
import "./Auth.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "./Images/logo.png";
import Header from "./Header/Header.js";

import axios from "axios";
import Dash from "../Dashboard.js/Dash";
const Auth = () => {
  const [show, setShow] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function showEye() {
    setShow(!show);
  }
  function getFormData(e) {
    e.preventDefault();
  }
  function requestLogin() {
    axios
      .post(
        "https://shielded-peak-58778.herokuapp.com/api/v1/users/signInByEmail",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("auth-token", res.data.accessToken);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  function logValues() {
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      {!loggedIn ? (
        <>
          <Header />
          <form className="Form" onSubmit={getFormData}>
            <img src={logo} alt="sfa" />
            <div className="FormDiv">
              <div className="labeldiv">
                <div>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="input"
                  ></input>
                </div>
                <div className="passwordDiv">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="input"
                    placeholder="password"
                  />
                  <span className="eyehide"> </span>

                  <button
                    onClick={() => {
                      showEye();
                    }}
                    className="eye"
                  >
                  
                    {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </button>
                </div>
              </div>
              <div className="btnPortion">
                <button
                  className="btn"
                  onClick={() => {
                    requestLogin();
                    logValues();
                  }}
                >
                  Login
                </button>
                <a href="/">forget Password ? </a>
              </div>
            </div>
          </form>
        </>
      ) : (
        <Dash />
      )}
    </div>
  );
};

export default Auth;
