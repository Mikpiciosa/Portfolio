import "./Portada.css";

export const Portada = () => {
  return (
    <section className="portada">
      <h2 className="portada__portfolio">Portfolio</h2>
      <div className="portada__contenedor">
        <h1 className="portada__name">Micaela Muñoz</h1>
        <p className="portada__p">Desarrolladora Web Full Stack</p>
        <button className="portada__boton">Descargar CV</button>
      </div>
    </section>
  );
};
