import { Title } from "../title/title";
import "./Projects2.css";
import { Card } from "../card/Card";
import cardInfo from "../data/works";

export const Projects2 = () => {
  return (
    <section className="projects__container">
      <article className="project__title">
        <div className="linear"></div>
        <Title
          name="Get to know a bit of my work"
          size="medium"
          direction="center"
          font="bebas"
          tono="title"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
      </article>
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
  );
};
