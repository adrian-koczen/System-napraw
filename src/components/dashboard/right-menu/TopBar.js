import React, { useState } from "react";
import { connect } from "react-redux";
import { logoutAction } from "../../../actions/logoutAction";
import { FaUserAlt } from "react-icons/fa";
import { selectTab } from "../../../actions/selectTab";
import { useNavigate } from "react-router";
// Icons
import { FiSettings } from "react-icons/fi";

const paths = [
  {
    id: 0,
    path: "ustawienia",
    icon: <FiSettings style={{ marginRight: 10 }} />,
  },
];

const TopBar = ({ user, logoutAction, selectTab }) => {
  const history = useNavigate();
  const [userInfoBar, turnOnUserBar] = useState(false);
  const handleSettingsTab = (e) => {
    const pathName = paths.filter(
      (el) => Number(el.id) === Number(e.target.id)
    )[0].path;
    history(pathName);
    //selectTab(Number(e.target.id));
  };
  return (
    <>
      <div className="top-bar-user">
        <FaUserAlt className="top-bar-icon" />
        <div
          onClick={() => turnOnUserBar(!userInfoBar)}
          className="top-bar-user-username"
        >
          {user.username}
        </div>
      </div>
      {userInfoBar && (
        <div
          onMouseLeave={() => turnOnUserBar(!userInfoBar)}
          className="username-menu"
        >
          <div className="username-menu-content">
            <span className="username-menu-title">Eksploracja</span>
            <span>Dostępne ustawienia twojego konta</span>
            <ul>
              {paths.map((el) => {
                return (
                  <li
                    onClick={handleSettingsTab}
                    id={el.tabID}
                    className="username-menu-element"
                    key={el.id}
                  >
                    {el.icon}
                    <span className="first-letter-up">{el.path}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="username-menu-logout">
            <span
              className="username-menu-logout-button"
              onClick={() => logoutAction()}
            >
              Wyloguj się
            </span>
          </div>
        </div>
      )}
    </>
  );
};

const MapStateToProps = (state) => {
  return { user: state.authorization.user };
};

export default connect(MapStateToProps, { logoutAction, selectTab })(TopBar);
