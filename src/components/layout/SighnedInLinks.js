import React from 'react';
import {NavLink} from 'react-router-dom';

const SighnedInLinks = () =>{

    return(
       <ul className="right">
           <li><NavLink to ='/create'>New Project</NavLink></li>
           <li><NavLink to ='/'>Log Out</NavLink></li>
            {/* materializecss in classname*/}
           <li><NavLink to ='/' className='btn btn-floating pink lighten-1 waves-effect waves-light'>AG</NavLink> </li>
       </ul>
    )
}

export default SighnedInLinks;