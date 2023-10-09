import "./About.css";
import img from "../../../assets/imagenes/linkedin.jpg";
import git from "../../../../public/github.svg";
import mail from "../../../../public/mail.svg";
import linkedin from "../../../../public/linkedin.svg";
import { useState } from "react";

export const About = () => {
  const [desc, setDesc] = useState(false);
  function handleToggle() {
    setDesc(!desc);
    console.log(desc);
  }

  return (
    <section>
      <article>
        <img src={img} alt="fotomia" />
        <h2>Contacto</h2>
        <div>
          <img src={git} alt="git" />
          <img src={linkedin} alt="linkedin" />
          <img src={mail} alt="mail" />
        </div>
      </article>
      <article>
        <div>
          <div>
            <h2>Sobre Mi</h2>
          </div>
          <div>
            <p>
              Hola! mi nombre es Micaela, soy desarrolladora y diseñadora web,
              me encanta crear sitios llamativos y funcionales para los
              clientes. Desde chica, me llamo la atención el diseño y cuando
              descubrí la manera de combinarlo con código, encontré realmente mi
              profesión.
            </p>
            <button>Leer más</button>
            {/* Este se activa en PC */}
            <div>
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
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Habilidades</h3>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div>
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
            <h3>Experiencia</h3>
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
          <div>
            <h3>Experiencia</h3>
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
        </div>
      </article>
    </section>
  );
};
