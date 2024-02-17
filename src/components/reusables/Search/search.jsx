"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./search.css";
import { fetchCities } from "../../api/api";
function Search({ setSelectedOption }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  async function loadOptions(inputValue) {
    const citiesList = await fetchCities(inputValue);
    setIsFocused(true);
    const arrayobj = [];
    citiesList?.data?.map((city) => {
      arrayobj.push({
        value: `${city.latitude}` + "," + `${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      });
    });
    setOptions(arrayobj);
  }
  const [options, setOptions] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    setIsFocused(false);
    setSearchValue(option.label);
  };
  return (
    <div
      className="search-container"
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          loadOptions(searchValue);
        }
      }}
    >
      <div className="input-wrap">
        <input
          type="text"
          name="city-search"
          id="city-search"
          placeholder="Search for cities"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <CiSearch
          onClick={() => {
            loadOptions(searchValue);
          }}
          className="search-icon"
        />
      </div>
      {isFocused ? (
        <>
          <div className="search-option">
            {options.map((option, index) => (
              <p
                key={index}
                onClick={() => {
                  handleOptionClick(option);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                {option.label}
              </p>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
