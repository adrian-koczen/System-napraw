import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchComponent = ({ setOnSearchFocus }) => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    const resizeEvent = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", resizeEvent);
  }, []);

  return (
    <>
      <form className="searchbox-wrapper">
        <input
          onFocus={(e) => {
            setOnSearchFocus("blur");
          }}
          onBlur={(e) => {
            setOnSearchFocus("");
            e.target.value = "";
          }}
          className="searchbox-input"
          placeholder="Nazwa miasta"
        ></input>
        {width > 600 && (
          <button className="default-button">
            {width > 750 && (
              <span className="search-text">Wyszukaj dostępny warsztat</span>
            )}
            <AiOutlineSearch className="icon-in-button" />
          </button>
        )}
      </form>
    </>
  );
};

export default SearchComponent;
