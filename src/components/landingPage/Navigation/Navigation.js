import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// CSS
import styles from "./style.module.css";

const Navigation = () => {
  const [typeOfView, setTypeOfView] = useState("");

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setTypeOfView("mobile");
    }
    if (window.innerWidth > 1000) {
      setTypeOfView("desktop");
    }
  }, []);

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setTypeOfView("mobile");
      }
      if (window.innerWidth > 1000) {
        setTypeOfView("desktop");
      }
    });

    return window.removeEventListener("resize", resizeEvent);
  });
  return (
    <>
      {typeOfView === "desktop" && (
        <div className={styles.navigationWrapper}>
          <div className={styles.navigationContainer}>
            <div className={styles.logo}>
              <h1>NaprawSie.pl</h1>
            </div>
            <ul className={styles.navigationList}>
              <li className={styles.navigationListElement}>Strona główna</li>
              <li className={styles.navigationListElement}>Ceny</li>
              <li className={styles.navigationListElement}>Infromacje</li>
              <li className={styles.navigationListElement}>Kontakt</li>
              <li className={styles.navigationListElement}>O nas</li>
            </ul>
          </div>
        </div>
      )}
      {typeOfView === "mobile" && (
        <div className={styles.mobileNavigationWrapper}>
          <div className={styles.logo}>
            <h1>NaprawSie.pl</h1>
          </div>
          <div className={styles.burgerMenuIcon}>
            <GiHamburgerMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
