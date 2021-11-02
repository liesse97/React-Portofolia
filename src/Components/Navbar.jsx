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
                {/* <li><Link to="/"  onClick={closeMobileMenu}>Home</Link></li>
                <li ><Link to="/#about-me" onClick={closeMobileMenu}>About</Link></li>
               <li> <Link to="/project" onClick={closeMobileMenu}>Projects</Link></li>
                <li><Link to="/skills" onClick={closeMobileMenu}>Skills</Link></li>
               <li> <Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li> */}
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
           
          
          <p>A frontend developer who’s very passionate
               about creating and trying new thing in webdevelopnmnet</p>
               <div className="btn-center">
{/* <button> <a href="images/CV(1).pdf" download> DOWNLOAD MY CV</a></button></div> */}
 <a href="images/CV(1).pdf" download> DOWNLOAD MY CV</a>
 </div>



      </section>
            </section>


      <section className="about-me" id="about-me">
    <h1>About</h1>
          <p>I'm a front-end-developer with a passion for making beautiful, responsive websites and web applications. Technology has always been a major interest in my life.
<br/>
In my free time I enjoy reading ,music, and spending time with my family.</p>
</section>


<section className="project" id="project">
          <h1>Project</h1>
          <Project />
       
          
 </section>

<section className="skills" id="skills">
          <h1>My Skills</h1>
          
         

     
  {/* <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="html-pic" src="images/html.jpg" />}
  >
    <Meta title="HTML"/>
  </Card> */}

        
             {/* <img
        // className="home-img"
        src="images/html.jpg"
        alt="html-pic"
      /> */}

{/* <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="css-pic" src="images/css.jpg" />}
  > */}
    {/* <Meta title="HTML"/>
  </Card> */}
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
          
          <p><i class="fas fa-envelope">Email</i></p>
          <p><i class="fab fa-github">Github</i></p>
          <p><i class="fab fa-linkedin-in">Linkdln</i></p>

          
</section>
</article>

        

           </article>

            
        </div>
    )
}

export default Nav

