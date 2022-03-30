import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";

//Actions
import { logoutAction } from "../../../../actions/logoutAction";

const Settings2FA = ({ user, logoutAction }) => {
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
        .post("https://panel-api.koczenadrian.pl/api/create2FA", null, {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((res) => {
          setqrCode(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const turnOff2FA = async (code) => {
    const token = localStorage.getItem("x-auth-token");
    try {
      await axios
        .post(
          "https://panel-api.koczenadrian.pl/api/remove2FA",
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
  return (
    <div className="twofa-settings-tab-wrapper">
      <form onSubmit={submitHandler}>
        <div className="twofa-settings-tab">
          <label>Weryfikacja dwustopniowa</label>
          {user.is2FA && (
            <>
              <span style={{ color: "#1f8b3a", fontWeight: "bold" }}>
                Włączona
              </span>
              <button
                onClick={() => settwofacode(!twofacode)}
                style={{ marginLeft: "10px" }}
                className="button"
              >
                Wyłącz weryfikacje dwustopniową
              </button>
            </>
          )}
          {!user.is2FA && (
            <button onClick={turnOn2FA} className="button">
              Włącz weryfikacje dwustopniową
            </button>
          )}
        </div>
        {twofacode && (
          <div className="twofa-settings-tab">
            <label>Wprowadź kod autoryzacyjny</label>
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
              Zatwierdź
            </button>
          </div>
        )}
        {qrCode && (
          <div className="qrcode-wrapper">
            <span>Zeskanuj kod aplikacją google Authenticator</span>
            <img className="qrcode-image" alt="qrCode" src={`${qrCode}`} />
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.authorization.user };
};

export default connect(mapStateToProps, { logoutAction })(Settings2FA);
