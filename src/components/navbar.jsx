import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/navbar.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";

import { useState } from "react";

import { TbMenu } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { SiOpencollective } from "react-icons/si";

const Navbar = () => {
  // js codes =======

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  const { i18n, t } = useTranslation(["navbar"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // ========== js codes

  return (
    <div className="container navbar_div">
      <div className="nav-things">
        <Link to="/">
          <div className="logo-nav">
            <img
              src="https://github.com/alone025/Animated_picture/assets/127105897/c8dec87b-abfd-4c19-bd55-f4cec380d3c8"
              alt=""
            />
            <h2>Forester</h2>
          </div>
        </Link>
        <div
          id="nav-links"
          className={isActive ? "active" : ""}
          // onClick={handleClick}
        >
          <Link to="/" onClick={handleClick} className="links">
            <span>#</span>
            {t("home")}
          </Link>
          <Link to="/works" onClick={handleClick} className="links">
            <span>#</span>
            {t("works")}
          </Link>
          <Link to="/about" onClick={handleClick} className="links">
            <span>#</span>
            {t("about-me")}
          </Link>
          <Link to="/contact" onClick={handleClick} className="links">
            <span>#</span>
            {t("contact")}
          </Link>
          <select
            onChange={handleLanguageChange}
            value={localStorage.getItem("i18nextLng")}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <div className="icons">
            <div className="chiziq"></div>
            <BsGithub />
            <BsTelegram />
            <SiOpencollective />
          </div>
        </div>
        <TbMenu className={isActive ? "active" : ""} onClick={handleClick} />
        <CgClose
          className={isActive ? "close" : "open"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
