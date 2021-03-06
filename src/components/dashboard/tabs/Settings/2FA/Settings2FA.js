import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
//Actions
import { logoutAction } from "../../../../../actions/logoutAction";
import { addNotification } from "../../../../../actions/notifications";
import { authorizationAction } from "../../../../../actions/authorizationAction";
//Components
import TwoFAverifyCode from "./TwoFAverifyCode";

const Settings2FA = ({
  user,
  logoutAction,
  addNotification,
  authorizationAction,
}) => {
  const [qrCode, setqrCode] = useState(null);
  const [twofacode, settwofacode] = useState(false);
  const [twofacodevalue, settwofacodevalue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const turnOn2FA = async () => {
    const token = localStorage.getItem("x-auth-token");
    try {
      await axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}/api/create2FA`, null, {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((res) => {
          setqrCode(res.data);
        });
    } catch (error) {
      addNotification(error.response.data, "error");
    }
  };
  const turnOff2FA = async (code) => {
    const token = localStorage.getItem("x-auth-token");
    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_ENDPOINT}/api/remove2FA`,
          { verifycode: code },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((res) => {
          if (res.data === true) {
            settwofacode(!twofacode);
            logoutAction();
          }
        });
    } catch (error) {
      settwofacodevalue("");
      console.log(error);
    }
  };
  const changeInput = (e) => {
    if (e.target.value.length < 7) {
      settwofacodevalue(e.target.value);
    }
  };
  useEffect(() => {
    authorizationAction();
  }, []);
  return (
    <div className="twofa-settings-tab-wrapper">
      <form onSubmit={submitHandler}>
        <div className="twofa-settings-tab">
          <label>Weryfikacja dwustopniowa</label>
          {user.is2FA && (
            <>
              <span style={{ color: "#1f8b3a", fontWeight: "bold" }}>
                W????czona
              </span>
              <button
                onClick={() => settwofacode(!twofacode)}
                style={{ marginLeft: "10px" }}
                className="button"
              >
                Wy????cz weryfikacje dwustopniow??
              </button>
            </>
          )}
          {!user.is2FA && (
            <button onClick={turnOn2FA} className="button">
              W????cz weryfikacje dwustopniow??
            </button>
          )}
        </div>
        {twofacode && (
          <div className="twofa-settings-tab">
            <label>Wprowad?? kod autoryzacyjny</label>
            <input
              className="twofacode-remove"
              type="number"
              onChange={changeInput}
              value={twofacodevalue}
            ></input>
            <button
              onClick={() => turnOff2FA(twofacodevalue)}
              className="button"
            >
              Zatwierd??
            </button>
          </div>
        )}
      </form>
      {qrCode && <TwoFAverifyCode qrCode={qrCode} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.authorization.user };
};

export default connect(mapStateToProps, {
  logoutAction,
  addNotification,
  authorizationAction,
})(Settings2FA);
