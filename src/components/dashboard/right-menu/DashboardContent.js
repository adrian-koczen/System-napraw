import React from "react";
import TopBar from "./TopBar";
// Components
import SettingsTab from "../tabs/Settings/SettingsTab";
import MainPage from "../tabs/MainPage/MainPage";
import NewRepair from "../tabs/NewRepair/NewRepair";
// Router
import { Routes, Route } from "react-router-dom";

const ElementTemp = ({ name }) => {
  return <div>{name}</div>;
};

const DashboardContent = () => {
  return (
    <div className="right-menu-wrapper">
      <div className="top-bar-wrapper">
        <TopBar />
      </div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="nowa-naprawa" element={<NewRepair />} />
        <Route
          path="zgloszenie-problemu"
          element={<ElementTemp name={"Zgłoszenie problemu"} />}
        />
        <Route path="ustawienia*" element={<SettingsTab />} />
        <Route path="platnosci" element={<ElementTemp name={"Platnosci"} />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;
