import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AiFillCloseSquare } from "react-icons/ai";
// Redux
import { connect } from "react-redux";
import { removeNotify } from "../../actions/notifications";

const PopUpElement = ({ message, type, id, removeNotify }) => {
  const [animateCloseBar, setAnimateCloseBar] = useState(() => {
    if (type === "success") {
      return styles.closeBarSuccess;
    } else if (type === "error") {
      return styles.closeBarError;
    }
  });
  useEffect(() => {
    setTimeout(() => {
      if (type === "success") {
        setAnimateCloseBar(
          `${styles.closeBarSuccess} ${styles.closeBarTimeout}`
        );
      } else if (type === "error") {
        setAnimateCloseBar(`${styles.closeBarError} ${styles.closeBarTimeout}`);
      }
    }, 400);
  });
  const removeOneNotify = () => {
    removeNotify(id);
  };
  return (
    <div className={styles.slideDownAnimate}>
      <div className={styles.frame}>
        <AiFillCloseSquare
          onClick={() => removeOneNotify()}
          className={styles.icon}
        />
        <span>{message}</span>
      </div>
      <div className={animateCloseBar}></div>
    </div>
  );
};

export default connect(null, { removeNotify })(PopUpElement);
