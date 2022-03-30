import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdCarRepair, MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const leftMenuTabs = [
  {
    id: 0,
    name: "Strona Główna",
    string: "",
    icon: <AiFillHome className="tab-icon" />,
  },
  {
    id: 1,
    name: "Nowa naprawa",
    string: "nowa-naprawa",
    icon: <MdCarRepair className="tab-icon" />,
  },
  {
    id: 2,
    name: "Płatności",
    string: "platnosci",
    icon: <MdPayment className="tab-icon" />,
  },
  {
    id: 3,
    name: "Zgłoszenie problemu",
    string: "zgloszenie-problemu",
    icon: <AiFillMessage className="tab-icon" />,
  },
];

const LeftMenu = () => {
  const history = useNavigate();
  const changeTabHandler = (e) => {
    const string = leftMenuTabs.filter(
      (el) => Number(el.id) === Number(e.target.id)
    )[0].string;
    console.log(string);
    history(string);
  };
  return (
    <div className="left-menu-wrapper">
      <div className="left-menu-logo">
        <h2>Nazwa Firmy</h2>
      </div>
      {leftMenuTabs.map((tab) => {
        return (
          <div key={tab.id} className="menu-tab">
            {tab.icon}
            <span id={tab.id} onClick={changeTabHandler}>
              {tab.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LeftMenu;
