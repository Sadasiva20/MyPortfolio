

import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Contact from './components/contact';

export default function Page() {

  return (
  <div> 
    <Nav />
    <section id="home">
    <Home />
    </section>
    <section id="about" >
     <About /> 
    </section>
    <section id="experience" >
      <Experience /> 
    </section>
    <section id="contact" >
     <Contact/> 
    </section>
    </div>
   
  );

}