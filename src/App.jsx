import "./App.css";
import { Contact } from "./components/contact/contact";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Projects2 } from "./components/projects2/Projects2";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <section className="bg">
        <main>
          <Home />
          <Projects2 />
          <Skills />
          <Contact />
        </main>
      </section>
    </>
  );
}

export default App;
