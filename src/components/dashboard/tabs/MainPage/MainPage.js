import styles from "./styles.module.css";
// Components
import Repairs from "./Repairs/Repairs";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Repairs />
    </div>
  );
};

export default MainPage;
