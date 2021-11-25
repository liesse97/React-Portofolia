import React, {useState} from 'react'
import {skillsInfo} from '../data'

import "./Navbar.scss";


const Skills= ()=> {
        const [state, setState] = useState(skillsInfo);
    return (
        <div>
           {state.map((item,index )=>
            (
           <img
        className="home-img"
        src={process.env.PUBLIC_URL + item.image }
        alt={item.alt}
      />

      ))}

       </div>
    )
}

export default Skills