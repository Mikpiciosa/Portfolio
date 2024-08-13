import "./contact.css";
import { Title } from "../title/Title";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="linear"></div>
      <Title
        name="Contact"
        size="medium"
        direction="center"
        font="bebas"
        tono="title"
      />
      <section className="contact-cont">
        <div className="contact--conta">
          <div className="contact--icons">
            <a href="mailto:micagustina.m@gmail.com">
              <img className="img__mail" src="./icons/mail.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/micaela-oz/">
              <img
                className="img__linkedin"
                src="./icons/linkedin.svg"
                alt=""
              />
            </a>
            <a href="https://github.com/Mikpiciosa">
              <img className="contact__img" src="./icons/github.svg" alt="" />
            </a>
          </div>
          <p className="contact__text">
            If you have any project in mind, I’d be delighted to hear about it.
          </p>
        </div>

        <form className="contact__form" action="">
          <label className="contact__item--text" htmlFor="">
            Nombre
          </label>
          <input className="form--item" type="email" />
          <label className="contact__item--text" htmlFor="">
            Correo
          </label>
          <input className="form--item" type="text" />
          <label className="contact__item--text" htmlFor="">
            Mensaje
          </label>
          <textarea
            className="form--item msj"
            type="text"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="form__btn"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    </section>
  );
};
