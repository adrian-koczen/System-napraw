import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";

// Import Tab Components
import SettingsTab from "../tabs/Settings/SettingsTab";

// Actions
import { selectTab } from "../../../actions/selectTab";

const SelectContent = ({ tabID, selectTab }) => {
  const { search } = useLocation();
  useEffect(() => {
    const url = new URLSearchParams(search);
    const tabID = url.get("tab");
    selectTab(Number(tabID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {tabID === 0 && <div>Strona główna</div>}
      {tabID === 1 && <div>Nowe zamówienie</div>}
      {tabID === 2 && <div>Płatności</div>}
      {tabID === 3 && <div>Nowe zgłoszenie</div>}
      {tabID === 4 && <SettingsTab />}
    </div>
  );
};

const MapStateToProps = (state) => {
  return { tabID: state.dashboard.id };
};

export default connect(MapStateToProps, { selectTab })(SelectContent);
