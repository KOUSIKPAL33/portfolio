import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Sociallinks from "./components/Sociallinks";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Sociallinks />
    </div>
  );
}

export default App;