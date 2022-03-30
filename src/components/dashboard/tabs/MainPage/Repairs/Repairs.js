import styles from "./styles.module.css";
// Components
import TabLabel from "../../TabLabel";

const NoRepairs = () => {
  return (
    <div className={styles.noRepairs}>
      <span className={styles.noRepairsText}>Brak danych</span>
    </div>
  );
};

const YesRepairs = () => {
  return (
    <div className={styles.noRepairs}>
      <span className={styles.noRepairsText}></span>
    </div>
  );
};

const Repairs = () => {
  return (
    <>
      <TabLabel name="Twoje naprawy" />
      <div className={styles.container}>
        <YesRepairs />
      </div>
    </>
  );
};

export default Repairs;
