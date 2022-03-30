import React, { useState } from "react";
import "../../App.css";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../actions/loginAction";
// Components
import PopUpContainer from "../PopUp/PopupContainer";
// Redux
import { addNotification } from "../../actions/notifications";

const SignIn = ({ authorization, loginAction, addNotification }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    loginAction(formData);
    setFormData({
      login: "",
      password: "",
    });
  };
  const valueChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (authorization.isAuthenticated) {
    return <Navigate replace to="/dashboard"></Navigate>;
  }

  if (authorization.waitForCode) {
    return <Navigate replace to="/2fa"></Navigate>;
  }

  return (
    <>
      <PopUpContainer />
      <div className="signin-wrapper">
        <div className="signin-box">
          <h1>Nazwa Firmy</h1>
          <h2>Zaloguj się</h2>
          <form className="signin-form" onSubmit={submitHandler}>
            <input
              value={formData.login}
              name="login"
              placeholder="Login"
              onChange={valueChangeHandler}
            ></input>
            <input
              value={formData.password}
              name="password"
              placeholder="Hasło"
              type="password"
              onChange={valueChangeHandler}
            ></input>
            <Link className="forgot-password" to="#">
              Zapomniałeś hasła?
            </Link>
            <div className="button-wrapper">
              <button type="submit" className="primary-button">
                Zaloguj się
              </button>
            </div>
          </form>
        </div>
        <div className="signin-box-right">
          <h2>Nie masz konta?</h2>
          <p>Zarejestruj się i zacznij korzystać z platformy</p>
          <div className="button-wrapper">
            <Link to={"/signup"}>
              <button className="primary-button">Zarejestruj się</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const MapStateToProps = (state) => {
  return { authorization: state.authorization };
};

export default connect(MapStateToProps, { loginAction, addNotification })(
  SignIn
);
