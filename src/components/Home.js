import home_img from "../assets/home.jpg"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Name = () => {
    return (
        <div className="text-center text-white absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <h1 className="font-extrabold text-6xl pb-8">Tushar Sahani</h1>
            <h1 className="flex flex-row text-4xl ml-16 font-semibold">
                <span className="">I'm a </span>
                <span className="ml-2 text-[#009e66]"><Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Programmer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Gamer")
                            .start();
                    }}
                    options={{
                        loop: true,
                    }}
                /></span>
            </h1>
        </div>
    );
}
const Home = () => {
    return (
        <>
            <div className="w-screen h-screen" style={{
                position: 'fixed', backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${home_img})`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
            >
                <Navbar />
                <Name />
                <div className="absolute bottom-6  right-9">
                    <ul className="flex flex-col">
                        <Link to="https://twitter.com/TusharSahani17/"><TwitterIcon sx={{ color: "white" }} className="m-3" /></Link>
                        <Link to="http://linkedin.com/in/tushar-sahani-70191223a/"><LinkedInIcon sx={{ color: "white" }} className="m-3" /></Link>
                        <Link to="https://github.com/Tushar-sahani"><GitHubIcon sx={{ color: "white" }} className="m-3" /></Link>
                        <Link to="https://www.instagram.com/tusharsahan1/"><InstagramIcon sx={{ color: "white" }} className="m-3" /></Link>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Home;