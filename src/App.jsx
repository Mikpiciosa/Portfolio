import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Projects2 } from "./components/projects2/Projects2";

function App() {
  return (
    <>
      <Header />
      <section className="bg">
        <main>
          <Home />
          <Projects2 />
        </main>
      </section>
    </>
  );
}

export default App;
