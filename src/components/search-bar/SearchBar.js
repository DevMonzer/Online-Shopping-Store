import React, { useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/x-circle.svg";

import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      <div className="searchIcon">
        {filteredData.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                key={value.id}
                href={value.link}
                target="_blank"
              >
                <div className="search-container">
                  <p>{value.name} </p>
                  <img src={value.imageUrl} alt={value.name} />
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
