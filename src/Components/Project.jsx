import React from 'react'
import "./Project.scss";
function Project() {
    return (
        <div className='proj'>
         <h1> Code </h1> 
        <div className= 'proj-container'>
            <section className='container'>

                {/* <div className="P-btn">
                <div className="card">
                    <div className="imgBx">
                        <img src="images/potorofolia bild.png" alt="" />
                       
                    </div>
                    <div className="content">
                         <h2>Card one</h2>
                        
                        <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p>
                    </div>
                <button>View code</button> 

                </div> */}

                 <div className="P-btn">
                 <div className="card">
                    <div className="imgBx">
                        <img src="images/potorofolia bild.png" alt="potorofolia" />
                    </div>
                    <div className="content">
                        <h2>Portofolia</h2>
                        <p>REACT/SASS</p>
                        {/* <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p> */}
                    </div>

                   </div>
                     <button>View code</button> 
                    <button id="left-space">View live</button> 

                     </div>

                {/* card 2 */}
                     <div className="P-btn">
                 <div className="card">
                    <div className="imgBx">
                        <img src="images/quill-Mobile.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Quill text editor</h2>
                        <p>HTML/CSS , JS , quilljs</p>
                    </div>

                   </div>
                     <button>View code</button> 
                     </div>

                          {/* card 3 */}
                          <div className="P-btn">
                    <div className="card">
                    <div className="imgBx">
                        <img src="images/music.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Todo List</h2>
                        <p>HTML/CSS JS</p>
                    </div>
                    
                    
                </div>
                    <button>
                       <a href= "https://github.com/liesse97/Music-player.git" target="_blank" rel="noreferrer">
                           View code
                           </a>
                           </button> 

                    <button id="left-space"> 
                    <a href= "https://music-player2.netlify.app/" target="_blank" rel="noreferrer">
                        View live
                        </a>
                        </button>            
                         </div>

                
            </section>
            {/* <h1>wordpress</h1> */}
            
        </div>
        <h1>Wordpress</h1>
                <div className= 'proj-container'>

                    <section className='container'>

        <div className="P-btn">
                 <div className="card">
                    <div className="imgBx">
                        <img src="images/föbu-sverige.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>föbu-sverige</h2>
                        <p>Wordpress</p>
                        {/* <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p> */}
                    </div>

                   </div>
                    <button id="left-space"> 
                    <a href= "https://www.fobu-sverige.se/" target="_blank" rel="noreferrer">
                        View live 
                        </a></button> 

                     </div>

                {/* card 2 */}
                     <div className="P-btn">
                 <div className="card">
                    <div className="imgBx">
                        <img src="images/bellhair.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Bellhair&Beauty</h2>
                        <p>Wordpress , E-commerce</p>
                    </div>

                   </div>
                     <button>Coming soon</button> 
                     </div>

                          {/* card 3 */}
                          {/* <div className="P-btn">
                    <div className="card">
                    <div className="imgBx">
                        <img src="images/to-do.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Kazozabyrå</h2>
                        <p>Wordpress</p>
                    </div>
                    
                </div>
                <button>Coming soon</button>
                </div> */}
                </section>
                </div>


        </div>
    )
}

export default Project
