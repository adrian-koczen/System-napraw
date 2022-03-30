import React from "react";
import { Link } from "react-router-dom";
// CSS
import styles from "./style.module.css";
//images
import image from "../../../images/repair_key.png";

const MainPage = () => {
  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.mainPageWelcomeText}>
        <h2>Rejestracja naprawy samochodu</h2>
        <p>
          Szybka rejestracja naprawy twojego samochodu w dostępnym warsztacie.
        </p>
        <p>
          Ty dostarczasz informacje oraz wybierasz datę naprawy, my zajmujemy
          się całą resztą
        </p>
        <Link className={styles.clearHref} to={"/signin"}>
          <div className={styles.button}>Zarejestruj się!</div>
        </Link>
      </div>
      <div className={styles.mainPageInfoBoxes}>
        <div className={styles.mainPageInfoBox}>
          <img className={styles.image} src={image} alt="NaprawSie.pl" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className={styles.mainPageInfoBox}>
          <img className={styles.image} src={image} alt="NaprawSie.pl" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
        <div className={styles.mainPageInfoBox}>
          <img className={styles.image} src={image} alt="NaprawSie.pl" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
