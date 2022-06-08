import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Summary = ({ dataForm }) => {
  const navigate = useNavigate();
  const [array, setArray] = useState(null);
  useEffect(() => {
    if (dataForm !== null) {
      let arr = [];
      for (let key in dataForm) {
        arr.push({ ...dataForm[key], title: [key] });
      }
      setArray(arr);
    }
  }, [dataForm]);

  const submitRepair = async () => {
    const token = localStorage.getItem("x-auth-token");
    const data = {
      carBrand: dataForm.marka.value,
      carModel: dataForm.model.value,
      carYear: dataForm.rocznik.value,
      description: dataForm.opis.value,
    };
    await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/repair`, data, {
      headers: {
        "x-auth-token": token,
      },
    });
    navigate("../../dashboard");
  };

  return (
    <div className={style.container}>
      {array &&
        array.map((element, index) => {
          return (
            <div key={index} className={style.elementContainer}>
              <div>
                <div className={style.beforeSpan}></div>
                <span className={style.elementTitle}>
                  {String(element.title).toUpperCase()}
                </span>
              </div>
              <span>{element.value}</span>
            </div>
          );
        })}
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={() => submitRepair()}>
          Dodaj naprawę
        </button>
      </div>
    </div>
  );
};

export default Summary;
