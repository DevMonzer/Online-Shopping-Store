import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // Navigate to the product card detail page via its route
  const navigate = useNavigate();
  const onNavigateHandler = (id) => {
    navigate(id);
    clearInput();
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
          {filteredData.slice(0, 15).map((value) => {
            return (
              <div key={value.id}>
                <Link className="dataItem" to={value.route}>
                  <div className="search-container">
                    <p>{value.name} </p>
                    <img
                      className="searchImage"
                      src={value.imageUrl}
                      alt={value.name}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
