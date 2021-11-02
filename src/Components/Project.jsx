import React from 'react'
import "./Project.scss";
function Project() {
    return (
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
                        <img src="images/potorofolia bild.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Quill</h2>
                        <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p>
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
                        <h2>Quill</h2>
                        <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p>
                    </div>

                   </div>
                     <button>View code</button> 
                     </div>

                          {/* card 3 */}
                          <div className="P-btn">
                    <div className="card">
                    <div className="imgBx">
                        <img src="images/to-do.png" alt="" />
                    </div>
                    <div className="content">
                        <h2>Todo List</h2>
                        <p>This project is a functional To-Do list application utilizing React class components and the Web Storage API to store data in localStorage.</p>
                    </div>
                    
                    
                </div>
                <button>View code</button>
                </div>

                
            </section>
            
        </div>
    )
}

export default Project
