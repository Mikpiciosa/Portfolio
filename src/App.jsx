import { Header } from "./components/static/Header/Header.jsx";
import { Footer } from "./components/static/Footer/Footer.jsx";

import { Portada } from "./components/static/Portada/Portada.jsx";
import { About } from "./components/static/About/About.jsx";
import { Services } from "./components/static/Servicios/Services.jsx";
import { Projects } from "./components/static/Projects/Projects.jsx";
import { Certifications } from "./components/static/Certifications/Certifications.jsx";
import { Contact } from "./components/static/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Portada />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
