import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Project from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
