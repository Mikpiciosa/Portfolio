import "./About.css";
import img from "../../../assets/imagenes/linkedin.jpg";
import git from "../../../../public/github.svg";
import mail from "../../../../public/mail.svg";
import linkedin from "../../../../public/linkedin.svg";
import { abouticons } from "./Abouticons.js";
import { useState } from "react";

export const About = () => {
  const [desc, setDesc] = useState(false);
  function handleToggle() {
    setDesc(!desc);
    console.log(desc);
  }

  const aboutIconsSocials = abouticons.filter((abouticons) =>
    ["github", "linkedin", "mail"].includes(abouticons.name)
  );

  const aboutIconsSkills = abouticons.filter(
    (abouticons) =>
      abouticons.name !== "github" &&
      abouticons.name !== "linkedin" &&
      abouticons.name !== "mail"
  );

  return (
    <section className="about">
      <div className="about__container">
        <img className="about__img" src={img} alt="fotomia" />
        <div className="about__contact">
          <h2>Contacto</h2>
          <div className="about__icons">
            {aboutIconsSocials.map(({ src, alt }, index) => (
              <img key={alt} src={src} alt={alt} />
            ))}
          </div>
        </div>
        <div className="about__caja1">
          <h2>Sobre Mi</h2>
          <p>
            Hola! mi nombre es Micaela, soy desarrolladora y diseñadora web, me
            encanta crear sitios llamativos y funcionales para los clientes.
            Desde chica, me llamo la atención el diseño y cuando descubrí la
            manera de combinarlo con código, encontré realmente mi profesión.
          </p>
          <div className="about__linear--right"></div>
          <button className="about__boton">Leer más</button>
        </div>
        {/* Este se activa en PC */}
        <div className="about__competencias">
          <h3>Competencias</h3>
          <ul>
            <li>Capacidad analitica</li>
            <li>Carismatica</li>
            <li>Observadora</li>
            <li>Buen trabajo en equipo</li>
            <li>Detallista</li>
            <li>Resolutiva</li>
            <li>Creativa</li>
          </ul>
        </div>
        <div className="about__habilidades">
          <h3>Habilidades</h3>
          <div className="habilidades__icons">
            {aboutIconsSkills.map(({ src, alt, name }, index) => (
              <picture key={index}>
                <img src={src} alt={alt} />
                <p>{name}</p>
              </picture>
            ))}
          </div>
        </div>
        <div className="about__education">
          <h3>Educacion</h3>
          <ul>
            <li>Diseño UX/UI: CoderHouse</li>
            <li>Desarrollo Web: CoderHouse</li>
            <li>Desarrollo Web Full Stack: Udemy</li>
            <li>Diplomatura Desarrollo Web Full Stack: UTN</li>
            <li>Git/GitHub: Coursera</li>
            <li>
              Habilidades blandas y Competencias laborales: Fundación Empujar.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="about__experiencia">Experiencia</h3>
          <ul>
            <li>
              Maqueta, diseño y mantenimiento de páginas web en Wordpress.
            </li>
            <li>Contacto directo con clientes en función de la necesidad.</li>
            <li>Gestión de la identidad de marca.</li>
            <li>Diseño UX/UI.</li>
            <li>
              Elaboración de documentos para la planificación e implementación
              posterior de la web.
            </li>
            <li>Programación en HTML y CSS, código embebido.</li>
            <li>Actualización de sitios web.</li>
          </ul>
        </div>
        {/* ESTE SE ACTIVA PARA MOBILE - es el mismo que el skills */}
        {/*  <div>
              <h3>Skills</h3>
              <ul>
                <li>Capacidad analitica</li>
                <li>Carismatica</li>
                <li>Observadora</li>
                <li>Buen trabajo en equipo</li>
                <li>Detallista</li>
                <li>Resolutiva</li>
                <li>Creativa</li>
              </ul>
            </div> */}
      </div>
    </section>
  );
};
