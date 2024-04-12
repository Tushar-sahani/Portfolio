import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)

  return (

    <div className="bg-transparent text-center flex ">
      <div className="p-8 text-white flex">
        <img src={logo} alt="Tushar Sahani" className="w-10" />
        <button className="shadow-md shadow-[#009e66] hover:bg-[#101010] hover:scale-100 hover:shadow-lg duration-300  text-white font-bold py-1 px-2 mx-7 -mt-2 rounded-full ">
            <Link 
              target="_blank"
              to="https://drive.google.com/drive/folders/1KbXIi0xJ9-uUTEli0MGzvy8C_aC_O-2_?usp=sharing"
              className="text-[#1cc288] text-sm font-semibold "
            >
              <DownloadIcon sx={{ fontSize: "18px" }} className="mr-1 text-sm"/>Resume
            </Link>
          </button>
      </div>
      <div onClick={() => setMenuIcon(!menuIcon)} className="absolute right-8 top-8 cursor-pointer md:hidden">
        {
          menuIcon ? <CloseIcon sx={{ color: "white", fontSize: "40px" }} /> : <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
        }
      </div>
      <ul className={`text-white absolute right-0 md:flex md:item-center md:pb-5 md:top-4  max-md:bg-[#191919] md:z-auto z-[-1] w-screen md:w-auto md:pl-0 lg:pl-9 transition-all duration-500 ease-in ${menuIcon ? 'top-20 opacity-100' : 'hidden'}  md:opacity-100 font-semibold z-40`} >
        <li className="p-6 max-md:p-3  " ><Link to="/about" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100">About</Link></li>
        <li className="p-6 max-md:p-2 "><Link to="/resume" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">Resume</Link></li>
        <li className="p-6 max-md:p-2 "><Link to="/project" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">Project</Link></li>
        <li className="p-6  max-md:p-2  "><Link to="https://linktr.ee/tushar_sahani" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100 ">Links</Link></li>
        <li className="p-6 max-md:p-2 "><Link to="/contact" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">Contact</Link></li>
      </ul>
    </div>
  );
};
export default Navbar;
