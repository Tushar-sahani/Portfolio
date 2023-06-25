import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const About =()=>{
    const navigate = useNavigate();
    const backHome = ()=>{
        navigate("/");
    }
    return(
        <div className="bg-[#111] text-white w-screen h-screen" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="absolute right-14 top-7">
                <button onClick={backHome}><CloseIcon sx={{fontSize:'38px'}}/></button>
            </div>
            <h1 className='absolute text-4xl font-extrabold -translate-x-2/4 -translate-y-2/4 top-1/4 left-2/4'>About Me</h1>
            <div className="animation"></div>
            <div className="">
                <div className="">
                    <img src="../assets/Tushar.jpg" alt=""/>
                </div>
                <div className=''>

                </div>
            </div>
        </div>
    );
}
export default About;