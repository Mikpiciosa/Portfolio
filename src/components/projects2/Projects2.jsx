import { Title } from "../title/Title";
import "./Projects2.css";
import { Card } from "../card/Card";
import cardInfo from "../data/works";

export const Projects2 = () => {
  return (
    <section className="projects__container" id="projects">
      <article className="project__title">
        <div className="linear"></div>
        <Title
          name="Get to know a bit of my work"
          size="medium"
          direction="center"
          font="bebas"
          tono="title"
        />
      </article>
      <section className="works__card">
        {cardInfo.works.map((card) => {
          return (
            <Card
              titleP={card.title}
              icons={card.icons}
              img={card.img}
              pagraph={card.pagraph}
              link={card.link}
            />
          );
        })}
      </section>
    </section>
  );
};
