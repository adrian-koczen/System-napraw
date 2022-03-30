import React from "react";
import styles from "./styles.module.css";
// Redux
import { connect } from "react-redux";
// Components
import PopUpElement from "./PopUpElement";

const PopupContainer = ({ notifications }) => {
  return (
    <div className={styles.container}>
      <div className={styles.flexCenter}>
        {notifications.length > 0 &&
          notifications.map((notification) => {
            return (
              <PopUpElement
                key={notification.id}
                message={notification.notificationMessage}
                type={notification.notificationType}
                id={notification.id}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps, null)(PopupContainer);
