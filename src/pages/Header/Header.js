import React, { useState } from "react";
import "./Header.css";
import Profile from "./assets/ProfileIMG.png";
import Logo from "./assets/LogoIMG.png";
import { FaBars, FaSearch, FaAngleDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";
import axios from "axios";
function Header({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  function logOut() {
    axios
      .get("https://shielded-peak-58778.herokuapp.com/api/v1/users/logout", {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.removeItem("auth-token");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Could not log out!");
      });
  }
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
    <div className="header" id="header">
      <div className="logo_container">
        <img src={Logo} alt="logoIcon" />
      </div>
      <div className="faBars_container">
        {/* <FaBars className="faBars" /> */}
      </div>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <GoSearch />
            ) : (
              <GrClose id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p> {value.title}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="userProfile_container">
        <div className="profile_img">
          <img src={Profile} alt="user" />
        </div>
        <div className="user_name">Bature Badamasi</div>
        <div className="userDropdown_icon">
          {/* <FaAngleDown /> */}
          <MdExitToApp
            onClick={() => {
              logOut();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
