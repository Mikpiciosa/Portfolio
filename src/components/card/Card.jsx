import "./Card.css";
import { Title } from "../title/Title";

export const Card = ({ img, titleP, pagraph, link, icons }) => {
  return (
    <article className="work">
      {/* <div className="bubble__project__container">
        <div className="bubble bubbleProject-1"></div>
        <div className="bubble bubbleProject-2"></div>
        <div className="bubble bubbleProject-3"></div>
      </div> */}
      {/* <div className="work__content"> */}
      <img className="img" src={img} alt="" />
      <div className="work__description">
        <div className="work__title">
          <Title
            name={titleP}
            size="medium"
            direction="left"
            font="bebas"
            tono="title"
          />
          <p className="work__paragraph">{pagraph}</p>
          <a className="work__btn" href={link} target="_blank">
            View more
          </a>
        </div>
        <div className="work__icons">
          <p className="work__p">Realizado con:</p>
          <aside>
            {icons.length > 0
              ? icons.map((icon) => {
                  return <img src={icon} />;
                })
              : null}
          </aside>
        </div>
      </div>
      {/* </div> */}
    </article>
  );
};
