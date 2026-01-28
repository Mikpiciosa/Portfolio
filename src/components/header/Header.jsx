import { useState, useEffect } from "react";
import "./Header.css";
import logo from "/logo/logoTitle.svg";

export const Header = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isClickedMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isClickedMenu]);

  const closeMenu = () => {
    setIsClickedMenu(false);
  };

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
        {isClickedMenu && (
          <div 
            className="menu__overlay"
            onClick={closeMenu}
          ></div>
        )}
        <ul className={`menu__list ${isClickedMenu && "menu__list--open"} `}>
          <li className="list__item list__item--close">
            <button 
              className="menu__close"
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </li>
          <li className="list__item">
            <a 
              className="list__link" 
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li className="list__item">
            <a 
              className="list__link" 
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li className="list__item">
            <a 
              className="list__link" 
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
