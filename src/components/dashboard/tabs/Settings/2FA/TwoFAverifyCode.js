import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { addNotification } from "../../../../../actions/notifications";
import { logoutAction } from "../../../../../actions/logoutAction";
import { connect } from "react-redux";

const TwoFAverifyCode = ({ qrCode, addNotification, logoutAction }) => {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/accept2FA`,
        { verifyCode: inputValue },
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          addNotification("Włączono weryfikację dwustopniową", "success");
          logoutAction();
        }
      })
      .catch((error) => {
        addNotification(error.response.data, "error");
      });
  };
  return (
    <div className={styles.container}>
      <span className={styles.marginLeft}>
        Zeskanuj kod aplikacją google Authenticator
      </span>
      <img className={styles.qrCode} alt="qrCode" src={qrCode} />
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <label>Wprowadź kod weryfikacyjny</label>
        <input
          value={inputValue}
          type="number"
          onChange={(e) => setInputValue([e.target.value])}
          className={"input"}
        ></input>
        <button type="submit" className="button">
          Zatwierdź
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addNotification, logoutAction })(
  TwoFAverifyCode
);
