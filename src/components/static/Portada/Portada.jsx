import "./Portada.css";

export const Portada = () => {
  return (
    <section className="portada">
      <div className="portada__contenedor">
        <h2 className="portada__portfolio">Portfolio</h2>
        <h1 className="portada__name">
          Micaela Muño<span>z</span>
        </h1>
        <p className="portada__p">Desarrolladora Web Full Stack</p>
        <button className="portada__boton">Descargar CV</button>
      </div>
    </section>
  );
};
