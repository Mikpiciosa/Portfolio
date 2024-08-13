import { Title } from "../title/Title";
import "./Home.css";
import frontLogo from "/logo/loguito.svg";

export const Home = () => {
  return (
    <section className="home__container">
      <article className="bubble-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3">
          <img className="frontLogo" src={frontLogo} alt="" />
        </div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </article>
      <article className="home__about">
        <Title
          name="HELLO!"
          size="large"
          direction="center"
          font="bebas"
          tono="title"
        />
        <p className="description">
          My name is <strong className="deco">Micaela</strong>, i'm
          <strong className="deco"> Developer and Web Design</strong>, I love
          creating eye-catching and functional websites for clients.
        </p>
        <article className="rrss">
          <a href="mailto:micagustina.m@gmail.com">
            <img className="img__mail" src="./icons/mail.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/micaela-oz/">
            <img className="img__linkedin" src="./icons/linkedin.svg" alt="" />
          </a>
          <a href="https://github.com/Mikpiciosa">
            <img className="contact__img" src="./icons/github.svg" alt="" />
          </a>
        </article>
      </article>
    </section>
  );
};
