import "./About.css";
import img from "../../../assets/imagenes/linkedin.jpg";

export const About = () => {
  return (
    <div className="about__background">
      <section className="contenedor__about">
        <div className="about__contenedor--img">
          <img className="about__img" src={img} alt="fotomia" />
        </div>
        <div className="contenedor__about--info">
          <h2 className="contenedor__about--text">Sobre Mi</h2>
          <p className="contenedor__about--p">
            Hola, mi nombre es Micaela, soy desarrolladora y diseñadora web, me
            encanta crear sitios llamativos y funcionales para los clientes.
            <br /> <br />
            Desde chica, me llamo la atención el diseño y cuando descubrí la
            manera de combinarlo con código, encontré realmente mi profesión.
          </p>

          <button className="contenedor__about--boton">Leer más</button>
        </div>
      </section>
    </div>
  );
};
