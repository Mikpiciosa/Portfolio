import "./project.css";
import mypet from "/mypetsocial.png";
import moon from "/pagmoon.png";
import carilo from "/carilo.png";
import figma from "/figma.svg";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="linear--right"></div>
      <h2 className="projects--title">Proyectos</h2>
      <div className="project--container">
        <img className="project--img" src={mypet} alt="imagen del proyecto" />
        <img className="project--logo" src={figma} alt="logito de figma" />
      </div>
      <div className="container--textandbutton">
        <p className="project--title">My Pet Social</p>
        <p className="project--text">
          Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde el
          UX con una amplia investigacion.
        </p>
        <button className="project--button">Ver Más</button>
      </div>
      <div className="project--container">
        <img className="project--img" src={moon} alt="imagen del proyecto" />
        <img className="project--logo" src={figma} alt="logito de figma" />
      </div>
      <div className="container--textandbutton">
        <p className="project--title">Moon</p>
        <p className="project--text">
          Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde el
          UX con una amplia investigacion.
        </p>
        <button className="project--button">Ver Más</button>
      </div>
      <div className="project--container">
        <img className="project--img" src={carilo} alt="imagen del proyecto" />
        <img className="project--logo" src={figma} alt="logito de figma" />
      </div>
      <div className="container--textandbutton">
        <p className="project--title">Carilo Hills</p>
        <p className="project--text">
          Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde el
          UX con una amplia investigacion.
        </p>
        <button className="project--button">Ver Más</button>
      </div>
    </section>
  );
};
