import Navbar from "./component/Navbar/navbar";
import Intro from "./component/Intro/Intro.js";
import Skills from "./component/Skills/Skills";
import Service from "./component/Services/service";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";
import Projects from "./component/Works/Project";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills />
      <Projects/>
      <Service/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
