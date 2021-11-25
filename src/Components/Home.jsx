import React from 'react';
import "./Navbar.scss";


const Home = ()=> {
    return (
        <div>

                  <img
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
                    </div>
    )
}

export default Home