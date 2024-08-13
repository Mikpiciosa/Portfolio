import { useState } from "react";
import "./Header.css";
import logo from "/logo/logoTitle.svg";

export const Header = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);

  console.log(isClickedMenu);

  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="logo" />
        <div
          className={`menu ${isClickedMenu && "menu--open"} `}
          onClick={() => {
            return setIsClickedMenu(!isClickedMenu);
          }}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
        <ul className={`menu__list ${isClickedMenu && "menu__list--open"} `}>
          <li className="list__item">
            <a className="list__link" href="#about">
              About
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#contact">
              Contact
            </a>
          </li>
          <li className="list__item">
            <button></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
