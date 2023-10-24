import "./Header.css";
import { useState } from "react";
import Logo from "../../../assets/logo/cat_logo.webp";
/*import hamg from "/hamburguesa.svg";  */

export const Header = () => {
  const [menu, setMenu] = useState(true);
  console.log(menu, setMenu);
  return (
    <header>
      {menu && (
        <div className="header__menu">
          <nav>
            <ul>
              <li className="header__menu--item">asd</li>
              <li>123</li>
              <li>21312s</li>
            </ul>
          </nav>
        </div>
      )}
      <nav>
        <img src={Logo} alt="logo" />
        {/* <ul>
          <li>Sobre Mi</li>
          <li>Servicios</li>
          <li>Proyectos</li>
          <li>Certificaciones</li>
          <li>Contacto</li>
        </ul> */}
      </nav>
    </header>
  );
};
