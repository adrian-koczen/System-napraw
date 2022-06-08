import styles from "./styles.module.css";
// Components
import TabLabel from "../../TabLabel";
import { useEffect, useState } from "react";
import axios from "axios";

const NoRepairs = () => {
  return <span className={styles.noRepairsText}>Brak aktywnych napraw</span>;
};

const Repairs = () => {
  const [repairs, setRepairs] = useState(null);
  const [fetching, setFetching] = useState(true);
  const getRepairs = async () => {
    const repairs = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/api/repair`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      }
    );
    if (repairs.data.length > 0) setRepairs(repairs.data);
    setFetching(false);
  };
  useEffect(() => {
    getRepairs();
  }, []);
  if (fetching) {
    return <></>;
  }
  return (
    <>
      <TabLabel name="Twoje naprawy" />
      <div className={styles.container}>
        {!repairs && <NoRepairs />}
        {repairs &&
          repairs.map((repair, i) => {
            return (
              <div key={i} className={styles.repairContainer}>
                <div>
                  <b>Data utworzenia:</b> {repair.startDate.slice(0, 10)}
                </div>
                <div>
                  <b>Marka samochodu:</b> {repair.carBrand}
                </div>
                <div>
                  <b>Model samochodu:</b> {repair.carModel}
                </div>
                <div>
                  <b>Rocznik samochodu:</b> {repair.carYear}
                </div>
                <div>
                  <b>Opis problemu: </b> {repair.description}
                </div>
                <div className={styles.notComplete}>
                  <b>Stan realizacji: </b>zgłoszenie oczekuje na przyjęcie
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Repairs;
