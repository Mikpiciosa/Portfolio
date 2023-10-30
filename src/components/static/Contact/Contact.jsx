import "./Contact.css";
import mail from "/mail.svg";
import linkedin from "/linkedin.svg";
import git from "/github.svg";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="linear--right"></div>
      <h2 className="contact__title">Contacto</h2>
      <section className="contact-cont">
        <div>
          <a href="mailto:micagustina.m@gmail.com">
            <img className="contact__img" src={mail} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/micaela-oz/">
            <img className="contact__img" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Mikpiciosa">
            <img className="contact__img" src={git} alt="" />
          </a>
        </div>
        <p className="contact__text">
          Si tenes algún proyecto en mente, estaré encantada de escucharte.
        </p>
        <form className="contact__form" action="">
          <label className="contact__item--text" htmlFor="">
            Nombre
          </label>
          <input className="form--item" type="text" />
          <label className="contact__item--text" htmlFor="">
            Correo
          </label>
          <input className="form--item" type="text" />
          <label className="contact__item--text" htmlFor="">
            Mensaje
          </label>
          <input className="form--item" type="text" />
          <button className="form__btn" type="submit">
            Enviar
          </button>
        </form>
      </section>
    </section>
  );
};
