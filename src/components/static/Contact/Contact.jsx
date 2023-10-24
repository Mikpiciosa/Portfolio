import "./Contact.css";
import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import git from "/github.svg";

export const Contact = () => {
  return (
    <section className="contact--container">
      <div className="linear--right"></div>
      <h2 className="contact--title">Contacto</h2>
      <div>
        <a href="mailto:micagustina.m@gmail.com">
          <img className="contact--img" src={mail} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/micaela-oz/">
          <img className="contact--img" src={linkedin} alt="" />
        </a>
        <a href="https://github.com/Mikpiciosa">
          <img className="contact--img" src={git} alt="" />
        </a>
      </div>
      <p className="contact--text">
        Si tenes algún proyecto en mente, estaré encantada de escucharte.
      </p>
      <form className="contact--form" action="">
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Correo</label>
        <input type="text" />
        <label htmlFor="">Mensaje</label>
        <input type="text" />
      </form>
    </section>
  );
};
