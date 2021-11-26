import React,{useState, useEffect} from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.scss";
import Project from './Project';
import Skills from './Skills';
import About from './About';
import Contact from "./Contact";
import Home from "./Home";
import Particle from './Particle';
import { Card } from 'antd';

const Nav = ()=> {
const [click, setClick] = useState(false)
const [button, setButton] = useState(true);

const handleClick=()=>  setClick(!click);
const closeMobileMenu = () => setClick(false);

   const showButton = () => {
    if (window.innerWidth <= 650) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

   useEffect(() => {
    showButton();
  }, []);

   window.addEventListener('resize', showButton);




const { Meta } = Card;



    return (
        <div>
            <nav>
                <div className="logo">
                   <h2> LI</h2>
                </div>
                <ul  className={click ? 'nav-menu active' : 'nav-menu'} >
                <li><Link smooth to="/"  onClick={closeMobileMenu}>Home</Link></li>
                <li ><Link smooth to="#about-me" onClick={closeMobileMenu}>About</Link></li>
               <li> <Link smooth to= "#project" onClick={closeMobileMenu}>Projects</Link></li>
                <li><Link smooth to="#skills" onClick={closeMobileMenu}>Skills</Link></li>
               <li> <Link smooth to="#contact" onClick={closeMobileMenu}>Contact</Link></li>
                </ul> 

                <div className="hamb-nav" onClick={handleClick}>
                  <i className={click?"fas fa-times":"fas fa-bars"}> </i>


                </div>
            </nav>

            <article>
          <article className={click ? 'blurry-site' : ''}>
          < Particle />

            <section className='home'>
              <Home />
            </section> 


      <section className="about-me" id="about-me">
    <h1>About</h1>
    <About/>
</section>


<section className="project" id="project">
          <h1>Project</h1>
          <Project />
 </section>

<section className="skills" id="skills">
          <h1>My Skills</h1>
          <Skills/>
          </section>

          

          <section className="contact" >
          <h1 id="contact">Contact me</h1>
          <Contact/>         
</section>

</article>
           </article>
        </div>
    )
}

export default Nav

