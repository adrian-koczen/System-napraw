import React, { useEffect } from "react";
import { authorizationAction } from "../../actions/authorizationAction";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LeftMenu from "./LeftMenu";
// Components
import PopupContainer from "../PopUp/PopupContainer";
import DashboardContent from "./right-menu/DashboardContent";

const Dashboard = ({ authorizationAction, authorization }) => {
  useEffect(() => {
    if (authorization.waitForCode) {
      return <Navigate replace to="/2fa"></Navigate>;
    }
    authorizationAction();
    // eslint-disable-next-line
  }, []);
  if (authorization.isAuthenticated === false) {
    return <Navigate replace to="/signin"></Navigate>;
  }

  if (authorization.loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="dashboard-wrapper">
      <PopupContainer />
      <LeftMenu />
      <DashboardContent />
    </div>
  );
};

const MapStateToProps = (state) => {
  return { authorization: state.authorization };
};

export default connect(MapStateToProps, { authorizationAction })(Dashboard);
