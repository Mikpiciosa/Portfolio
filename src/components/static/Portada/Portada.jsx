import "./Portada.css";

export const Portada = () => {
  return (
    <section className="portada">
      <div className="portada__contenedor">
        <h2 className="portada__portfolio">Portfolio</h2>
        <h1 className="portada__name">
          Micaela Muño<span>z</span>
        </h1>
        <p className="portada__p">Desarrolladora y Diseñadora Web</p>
        <a
          className="portada__boton"
          href="https://drive.google.com/file/d/1xfm3-1yybQsj3CIDTBaoHjhHuH0HpwSk/view?usp=drive_link"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
};
