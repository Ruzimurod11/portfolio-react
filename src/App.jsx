import "./App.css";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
   return (
      <>
         <div className="Header_wrapper">
            <Nav />
            <Header />
         </div>
         <Service />
         <About />
         <Projects />
         <Skills />
         <Awards />
         <Testimonials />
         <Footer />
      </>
   );
}

export default App;
