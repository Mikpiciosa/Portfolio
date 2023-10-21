import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact--container">
      <div className="linear--right"></div>
      <h2 className="contact--title">Contacto</h2>
      <p>Si tenes algún proyecto en mente, estaré encantada de escucharte.</p>
      <form className="contact--form" action="">
        <label htmlFor="">Hola</label>
        <input type="text" />
      </form>
    </section>
  );
};
