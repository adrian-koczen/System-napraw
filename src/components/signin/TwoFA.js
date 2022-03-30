import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { twoFA } from "../../actions/twoFAaction";

const TwoFA = ({ authorization, twoFA }) => {
  const [verifyCode, setVderifyCode] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    twoFA(verifyCode);
  };
  const changeHandler = (e) => {
    let value = e.target.value;
    setVderifyCode(value);
  };

  if (authorization.waitForCode === undefined) {
    return <Navigate replace to="/signin" />;
  }

  if (authorization.isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }
  return (
    <div className="two-fa-login-wrapper">
      <h1>Weryfikacja dwustopniowa</h1>
      <form onSubmit={submitHandler}>
        <label>Wprowadź kod:</label>
        <input
          onChange={changeHandler}
          value={verifyCode}
          name="verifycodeinput"
          type="number"
          className="input"
        ></input>
        <button className="button" type="submit">
          Zatwierdź
        </button>
      </form>
    </div>
  );
};

const MapStateToProps = (state) => {
  return { authorization: state.authorization };
};

export default connect(MapStateToProps, { twoFA })(TwoFA);
