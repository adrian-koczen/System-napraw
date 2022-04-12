import styles from "./styles.module.css";
// Components
import TabLabel from "../../TabLabel";

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
