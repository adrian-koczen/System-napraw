import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
// Import logout action
import { logoutAction } from "../../../../actions/logoutAction";
import { addNotification } from "../../../../actions/notifications";

const SettingsPassword = ({ logoutAction, addNotification }) => {
  const [dataForm, setDataForm] = useState({
    password: "",
    newPassword: "",
    newPasswordAgain: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    resetPassword(
      dataForm.password,
      dataForm.newPassword,
      dataForm.newPasswordAgain
    );
  };
  const resetPassword = async (password, newPassword, newPasswordAgain) => {
    const token = localStorage.getItem("x-auth-token");
    await axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/passwordReset`,
        {
          password: password,
          newPassword: newPassword,
          newPasswordAgain: newPasswordAgain,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        logoutAction();
      })
      .catch((error) => {
        addNotification(error.response.data, "error");
      });
  };
  const onChangeHandler = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="settings-password-wrapper">
      <form onSubmit={submitHandler} className="reset-password">
        <div className="form-element">
          <label>Aktualne hasło:</label>
          <input
            name="password"
            onChange={onChangeHandler}
            value={dataForm.password}
            className="input"
            required
            type="password"
          />
        </div>
        <div className="form-element">
          <label>Wprowadź nowe hasło:</label>
          <input
            name="newPassword"
            onChange={onChangeHandler}
            value={dataForm.newPassword}
            className="input"
            required
            type="password"
          />
        </div>
        <div className="form-element">
          <label>Wprowadź nowe hasło ponownie:</label>
          <input
            name="newPasswordAgain"
            onChange={onChangeHandler}
            value={dataForm.newPasswordAgain}
            className="input"
            required
            type="password"
          />
        </div>
        <button type="submit" className="button">
          Zresetuj hasło
        </button>
      </form>
    </div>
  );
};

export default connect(null, { logoutAction, addNotification })(
  SettingsPassword
);
