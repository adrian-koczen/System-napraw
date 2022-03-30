import React from "react";
import { useNavigate } from "react-router-dom";

const settingsTabs = [
  {
    id: 0,
    name: "Weryfikacja dwustopniowa",
    slug: "2fa",
  },
  {
    id: 1,
    name: "Zmiana Hasła",
    slug: "zmiana-hasla",
  },
  {
    id: 2,
    name: "Dane personalne",
    slug: "dane-personalne",
  },
];

const SettingsSelect = () => {
  const history = useNavigate();
  const selectSettingsTab = (id) => {
    const slug = settingsTabs.filter((el) => Number(el.id) === Number(id))[0]
      .slug;
    history(slug);
  };
  return (
    <div className="settings-select-tab">
      <ul>
        {settingsTabs.map((tab) => {
          return (
            <li
              className="button"
              onClick={() => selectSettingsTab(tab.id)}
              key={tab.id}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SettingsSelect;
