import React from "react";
import TabLabel from "../TabLabel";
import SettingsSelect from "./SettingsSelect";
import SettingsPassword from "./SettingsPassword";
import Settings2FA from "./Settings2FA";
import SetupUserData from "./SettingsUserData/SetupUserData";
// Router
import { Routes, Route } from "react-router-dom";

const SettingsTab = () => {
  return (
    <div>
      <TabLabel name={"Ustawienia"} />
      <SettingsSelect />
      <Routes>
        <Route path="zmiana-hasla" element={<SettingsPassword />} />
        <Route path="2fa" element={<Settings2FA />} />
        <Route path="dane-personalne" element={<SetupUserData />} />
      </Routes>
    </div>
  );
};

export default SettingsTab;
