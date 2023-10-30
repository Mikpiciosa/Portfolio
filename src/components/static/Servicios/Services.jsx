import "./Services.css";

export const Services = () => {
  return (
    <div className="services__container">
      <div className="linear--right"></div>
      <h2 className="titulo--principal">Servicios</h2>
      <p className="title--text">
        Encontremos juntos la forma de plasmar tu idea.
      </p>
      <div className="servide__sections">
        <section className="service__diseñouxui ">
          <h2 className="titulo">Diseño Ux/Ui</h2>
          <p>
            Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde
            el UX con una amplia investigacion sobre el rubro en el cual esta
            apuntando y con el UI para generar una web/app atractiva e intuitiva
            a la vista de cualquier usuario.
          </p>
          <button className="serv--boton">Ver más</button>
        </section>
        <section className="service__diseñouxui">
          <h2 className="titulo">Desarrollo Web</h2>
          <p>
            Cuento con todo lo necesario para crearte una web totalmente
            funcional, bien estructurada y sobretodo, agradable a la vista.
          </p>
          <button className="serv--boton">Ver más</button>
        </section>
        <section className="service__diseñouxui">
          <h2 className="titulo">Asesoramiento</h2>
          <p>
            Con nuestro servicio de diseño UX/UI ofrecemos acompañamiento desde
            el UX con una amplia investigacion sobre el rubro en el cual esta
            apuntando y con el UI para generar una web/app atractiva e intuitiva
            a la vista de cualquier usuario.
          </p>
          <button className="serv--boton">Ver más</button>
        </section>
      </div>
    </div>
  );
};
