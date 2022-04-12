import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const Summary = ({ dataForm }) => {
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
    </div>
  );
};

export default Summary;
