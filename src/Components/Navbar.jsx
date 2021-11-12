import React,{useState, useEffect} from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import "./Navbar.scss";
import Project from './Project';
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
          < Particle />
          <article className={click ? 'blurry-site' : ''}>

              <section className='home'>

                  <img
        // className="home-img"
        // src="images/pic-dev.png"
          src="images/go.jpg"
        alt="home-pic"
      />
      <section className='text-home'>
          <h2>Hi, My name is  
              Liesse </h2>
           
          
          <p>A frontend developer who creates beautiful and functional websites.</p>
               <div className="btn-center">
 <a href="images/CV.pdf" download> DOWNLOAD MY CV</a>
 </div>



      </section>
            </section>


      <section className="about-me" id="about-me">
    <h1>About</h1>
          <p>I'm a creative front-end developer with a keen desire to constantly learn more to increase and sharpen my proficiency in web programming.
As a human being, I am flexible, persistent, and goal-oriented with a great interest in creating functional and beautiful pages for the web and writing clean and well-structured code.
</p>
</section>


<section className="project" id="project">
          <h1>Project</h1>
          <Project />
       
          
 </section>

<section className="skills" id="skills">
          <h1>My Skills</h1>
          
  <img
        className="home-img"
        src="images/html.jpg"
        alt="html-pic"
      />
      <img
        className="home-img"
        src="images/css.jpg"
        alt="css-pic"
      />
  
      <img
        className="home-img"
        src="images/javascript.jpg"
        alt="javascript-pic"
      />
      <img
        className="home-img"
        src="images/wordpress.png"
        alt="css-pic"
      />
      <br/>
         <img
        className="home-img"
        src="images/react.jpg"
        alt="react-pic"
      />
         <img
        className="home-img"
        src="images/figma.png"
        alt="figma-pic"
      />
         <img
        className="home-img"
        src="images/sass.png"
        alt="html-pic"
      />
      

          </section>

          <section className="contact" id="contact">
          <h1>Contact me</h1>
          
          <p><a href="mailto:ishimwelieish@gmail.com"> <i class="fas fa-envelope">Email</i></a></p>
          <p><a href="https://github.com/liesse97" target="_blank" rel="noreferrer"><i class="fab fa-github">Github</i></a></p>
          <p><a href="https://www.linkedin.com/in/liesse-ishimwe-35982b194/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in">Linkdln</i></a></p>

          
</section>
</article>

        

           </article>

            
        </div>
    )
}

export default Nav

