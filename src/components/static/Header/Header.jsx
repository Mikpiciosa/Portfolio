import "./Header.css";
import { useState } from "react";
/* import Logo from "../../../assets/logo/cat_logo.webp"; */
import hamg from "/hamb.svg";
import x from "/x.svg";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu, setMenu);

  const toggleMenu = () => {
    setMenu(!menu);
    const body = document.getElementById("body");
    if (!menu) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  };

  return (
    <header className="header">
      {menu && (
        <div className="header__menu">
          <div className="header__menu-btncontainer">
            <button className="header__menu-button" onClick={toggleMenu}>
              <img src={x} alt="boton cerrar" />
            </button>
          </div>
          <nav className="header__menu-nav">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Sobre Mi
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Servicios
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Proyectos
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Certificaciones
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <button className="header__menu-button menu-abrir" onClick={toggleMenu}>
        <img src={hamg} alt="menu hamb" />
      </button>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Sobre Mi
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Servicios
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Proyectos
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Certificaciones
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
