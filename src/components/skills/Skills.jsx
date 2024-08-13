import "./Skills.css";
import { icons } from "./icons.js";
import { Title } from "../title/Title";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="linear"></div>
      <Title
        name="My Skills"
        size="medium"
        direction="center"
        font="bebas"
        tono="title"
      />
      <article className="cont__skills">
        <div className="pepis">
          <h3 className="skill__title">Informatica</h3>
          <div className="cont__icons ">
            {icons.informatica.map(({ name, src }) => {
              return (
                <div className="icons__text" key={name}>
                  <img className="skills__icons" src={src} alt="" />
                  <p className="skills__text">{name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pepis">
          <h3 className="skill__title">Complementarias</h3>
          <div className="cont__icons ">
            {icons.complementarias.map(({ name, src }) => {
              return (
                <div className="icon__cont" key={name}>
                  <img className="skills__icons" src={src} alt="" />
                  <p className="skills__text">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};
