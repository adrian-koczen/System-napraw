import { useState } from "react";
import axios from "axios";
import { addNotification } from "../../../../../actions/notifications";
import { connect } from "react-redux";

const SetupUserData = ({ addNotification }) => {
  const [dataForm, setDataForm] = useState({
    firstname: "",
    surname: "",
    phoneNumber: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}/api/personalData`,
        dataForm,
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      )
      .then((response) => {
        addNotification(response.data.message, "success");
      })
      .catch((error) => {
        console.log(error.response);
        for (let singleError of error.response.data.errors) {
          addNotification(singleError.msg, "error");
        }
      });
  };
  const onChangeHandler = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="settings-password-wrapper">
      <form onSubmit={submitHandler} className="reset-password">
        <div className="form-element">
          <label>Imię:</label>
          <input
            name="firstname"
            onChange={onChangeHandler}
            value={dataForm.firstname}
            className="input"
            required
            type="text"
          />
        </div>
        <div className="form-element">
          <label>Nazwisko:</label>
          <input
            name="surname"
            onChange={onChangeHandler}
            value={dataForm.surname}
            className="input"
            required
            type="text"
          />
        </div>
        <div className="form-element">
          <label>Numer telefonu:</label>
          <input
            name="phoneNumber"
            onChange={onChangeHandler}
            value={dataForm.phoneNumber}
            className="input"
            required
            type="number"
          />
        </div>
        <button type="submit" className="button">
          Zatwierdź dane
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addNotification })(SetupUserData);
