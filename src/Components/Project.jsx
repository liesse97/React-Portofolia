import React, {useState} from 'react'
import {info} from '../data'
import "./Project.scss";


function Project() {
    const [state, setState] = useState(info);

    const handleFilter=(e)=>{
        let filterWord = e.target.value;

        if (filterWord ==='all'){
            setState(info);
        }
        else if (filterWord ==='code'){
            const filtered= info.filter (
                item=>item.kind ==='code'
            )
            setState(filtered);

        }
       else if (filterWord ==='wordpress'){
            const filtered= info.filter (
                item=>item.kind ==='wordpress'
            )
            setState(filtered);

        }        

    }
    


    return (
        <div className='proj'>
            <div className="filterBtns">
                <button autofocus value ="allC" onClick={handleFilter} >All</button>
                <button value ="code" onClick={handleFilter}>Code</button>
                <button value ="wordpress" onClick={handleFilter}>Wordpress</button>
            </div>

            
            <div className= 'proj-container'>
            <section className='container'>

         {state.map((item,index) =>(

<div className="P-btn" key={item.id}>
                 <div className="card">
                    <div className="imgBx">
                        <img src={ process.env.PUBLIC_URL + item.picture } 
                        alt = {item.name}
                         />
                    </div>
                    <div className="content">
                        <h2>{item.name}</h2> 
                        <p>{item.technique}</p>
                    </div>
                   </div>
                   
                     { item.codeLink?<button>
                         <a href= {item.codeLink} target="_blank" rel="noreferrer">
                          View code
                          </a>
                       </button> : null}

                   <button id="left-space">
                        <a href= {item.liveLink} target="_blank" rel="noreferrer">
                        View live
                        </a> 
                        </button> 
        </div>

         ))}

                     </section> 
                              </div> 

                </div>


    )
}

export default Project
