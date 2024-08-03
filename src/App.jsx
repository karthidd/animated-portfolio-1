import "./App.scss";
import Hero from "./Components/Navbar/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
       <Hero/>
      </section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <section><Services/></section>
      
      <Portfolio/>
      <section id="Contact"><Contact/></section> 
      
      
    </div>
  );
};

export default App;
