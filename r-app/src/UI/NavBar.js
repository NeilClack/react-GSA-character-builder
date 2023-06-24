 import React from 'react';
 import  { Link } from 'react-router-dom';

 const NavBar = () => (
     <nav>
         <ul>
             <li>
                <Link to="/">Home</Link>
             </li>
             <li>
                <Link to="/about">Characters</Link>
             </li>
             <li>
                <Link to="/characters/new">New Character</Link>
             </li>
         </ul>
     </nav>
 )

 export default NavBar;