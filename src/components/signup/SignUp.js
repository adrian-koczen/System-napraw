import React, { useState } from "react";
import "../../App.css";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./style.module.css";
// Components
import PopUpContainer from "../PopUp/PopupContainer";
//Temp
import { addNotification } from "../../actions/notifications";
import axios from "axios";

const SignUp = ({ authorization, loginAction, addNotification }) => {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    password2: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("https://panel-api.koczenadrian.pl/api/user", {
        username: formData.login,
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
      })
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          addNotification(data.message, "success");
        }
        setFormData({
          login: "",
          email: "",
          password: "",
          password2: "",
        });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          addNotification(error.response.data.message, "error");
        }
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
      {<PopUpContainer />}
      <div className={styles.signinWrapper}>
        <div className={styles.signinBox}>
          <h1>Nazwa Firmy</h1>
          <h2>Zarejestruj się</h2>
          <form className={styles.signinForm} onSubmit={submitHandler}>
            <input
              value={formData.login}
              name="login"
              placeholder="Login"
              onChange={valueChangeHandler}
            ></input>
            <input
              value={formData.email}
              name="email"
              placeholder="E-mail"
              onChange={valueChangeHandler}
            ></input>
            <input
              value={formData.password}
              name="password"
              placeholder="Hasło"
              type="password"
              onChange={valueChangeHandler}
            ></input>
            <input
              value={formData.password2}
              name="password2"
              placeholder="Powtórz hasło"
              type="password"
              onChange={valueChangeHandler}
            ></input>
            <Link className={styles.forgotPassword} to="#">
              Zapomniałeś hasła?
            </Link>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.primaryButton}>
                Zarejestruj się
              </button>
            </div>
          </form>
        </div>
        <div className={styles.signinBoxRight}>
          <div className={styles.backgroundImage} />
          <h2>Masz już konto?</h2>
          <p>Zaloguj się i zacznij korzystać z platformy</p>
          <div className={styles.buttonWrapper}>
            <Link to={"/signin"}>
              <button className={styles.primaryButton}>Zaloguj się</button>
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

export default connect(MapStateToProps, { addNotification })(SignUp);
