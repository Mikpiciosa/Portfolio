import Logo from "../../../assets/logo/cat_logo.webp";

export const Header = () => {
  return (
    <header>
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
