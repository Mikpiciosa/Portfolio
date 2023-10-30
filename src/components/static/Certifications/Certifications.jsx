import "./Certifications.css";
import web from "/certweb.png";
import ux from "/certux.png";
import git from "/certgit.png";

export const Certifications = () => {
  return (
    <section className="certificates">
      <div className="linear--right"></div>
      <h2 className="certificates--title">Certificados</h2>
      <div className="cert--container">
        <img className="container--img" src={ux} alt="" />
        <img className="container--img" src={web} alt="" />
        <img className="container--img" src={git} alt="" />
      </div>
    </section>
  );
};
