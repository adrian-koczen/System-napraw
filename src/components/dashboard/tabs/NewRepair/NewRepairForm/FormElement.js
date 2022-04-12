import style from "./style.module.css";
import React, { useEffect, useState } from "react";

const FormElement = ({
  title,
  placeholder,
  name,
  dataForm,
  setDataForm,
  step,
  setStep,
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const [tempData, setTempData] = useState({
    value: "",
  });
  useEffect(() => {
    if (tempData.value.length < 1) {
      setIsFilled(false);
    }
  }, [tempData]);
  const changeHandler = (e) => {
    e.preventDefault();
    setTempData({ value: e.target.value });
    if (e.target.value.length > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let valueToChangevalue = name;
    if (tempData.value.length > 0) {
      setDataForm({
        ...dataForm,
        [valueToChangevalue]: {
          value: tempData.value,
          isCompleted: true,
        },
      });
      setStep(step + 1);
      setTempData({ value: "" });
    }
  };
  return (
    <form className={style.formElementContainer} onSubmit={submitHandler}>
      <label className={style.label}>{title}</label>
      <input
        className={
          isFilled
            ? `${style.input} ${style.inputFilled}`
            : `${style.input} ${style.inputNotFilled}`
        }
        placeholder={placeholder}
        required
        onChange={changeHandler}
        value={tempData.value}
      ></input>
      <button type="submit" className={style.button}>
        Dalej
      </button>
    </form>
  );
};

export default FormElement;
