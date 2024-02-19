import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaMusic, FaSearch } from "react-icons/fa";
import "./Header.css"

export default function Header() {
//   const { user, logOut } = useContext(AuthContext);

  
  const menuItems = (
    <>
      <li>
        <Link className="Button" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="Button" to="/classes">
          Classes
        </Link>
      </li>
      <li>
        <Link className="Button" to="/instructors">
          Instructors
        </Link>
      </li>
      <li>
      <Link className="Button" to="/mycart">
        Enroled Class
      </Link>
    </li>
    <li>
      <Link className="Button" to="/users">
        Users
      </Link>
    </li>
    <li>
      <Link className="Button" to="/addclass">
        Add Class
      </Link>
    </li>
      <li>
        <Link className="Button" to="/about">
          About Us
        </Link>
      </li>
    </>
  );

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/classes`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
    const filteredSuggestions =
      inputText !== ""
        ? classes.filter((Class) =>
            Class.class_name.toLowerCase().startsWith(inputText.toLowerCase())
          )
        : [];

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCountry) => {
    setSearchTerm(selectedCountry.class_name);
    setSuggestions([]);
  };

  return (
    <div className="fixed z-50 w-full bg-black bg-opacity-60 lg:h-[85px] text-white p-4">
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center space-x-4">
          <div className="group relative">
            <div className="lg:hidden">
              <input type="checkbox" id="checkbox" onClick={toggleMenu} />
              <label for="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
            {isMenuOpen && (
              <ul className="mt-[28px] z-10 p-2 shadow bg-black bg-opacity-80 rounded w-52 absolute">
                {menuItems}
              </ul>
            )}
          </div>
          <Link to={"/"} className="lg:text-3xl text-lg flex items-center">
            <FaMusic className="mr-3"></FaMusic>
            <span className="text-[#3081D0] mr-2">Tempo</span>Tutors
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex gap-6">{menuItems}</ul>
        </div>

        <div className="text-xl lg:pr-2 flex items-center">
          {/* input */}
          <div className="container border-b-2">
            <div className="mainbox lg:w-[230px]">
              <div className="iconContainer">
                <button onClick={toggleSearch}>
                  <FaSearch className="w-9" />
                </button>
              </div>

              <input
                className="search_input w-[120px] lg:w-[185px]"
                placeholder="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
              />
              {/* <button onClick={handleLogout}>logout</button> */}
            </div>
            {suggestions.length > 0 && (
              <ul className="lg:w-[230px] w-[160px] mt-[1px] lg:mt-[123px] text-sm mr-10 p-3 shadow bg-black bg-opacity-60 rounded-b-xl absolute">
                {suggestions.slice(0, 8).map((Class, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(Class)}>
                    <button className="pb-2">{Class.class_name}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* profile */}
      </div>
    </div>
  );
}
