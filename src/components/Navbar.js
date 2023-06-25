import { useState } from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(true)
    
  return (
    
    <div className="bg-transparent text-center lg:flex " style={{fontFamily:'Poppins,sans-serif'}}>
      {/* {
        (window.innerWidth <= 640)?(menuIcon ?<button onClick={()=>setMenuIcon(true)}><MenuIcon /></button>:<button onClick={()=>setMenuIcon(false)}><MenuOpenIcon /></button>):""
      } */}
      <div className="p-10 text-white">
        <img src="" alt="Tushar Sahani"  />
      </div>
      <ul className="p-4 lg:flex absolute right-5 text-white">
        <li className="p-6"><Link to="/about">About</Link></li>
        <li className="p-6"><Link to="/resume">Resume</Link></li>
        <li className="p-6"><Link to="/projects">Projects</Link></li>
        <li className="p-6"><Link to="/portfolio">Portfolio</Link></li>
        <li className="p-6"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};
export default Navbar;
