import CloseIcon from '@mui/icons-material/Close';
import HubIcon from '@mui/icons-material/Hub';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Home from "./Home"
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/");
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ebd359j', 'template_xdyzkjh', form.current, 'Xl_bMOAgBlREeleuV')
            .then((result) => {
                console.log(result);
                alert("Message Send Succesfully");
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
    };
    return (
        <div className="bg-[#111] text-white w-screen h-screen max-md:h-[1250px]" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
                <button onClick={backHome} className='after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1'><CloseIcon sx={{ fontSize: '38px',color:'#009e66' }} /></button>
            </div>
            <p className='text-thin text-[#9f9f9f] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[102px] max-md:text-center'>Feel free to contact me anytimes</p>
            <h1 className='absolute text-4xl -translate-x-2/4 -translate-y-2/4 top-40 max-md:top-36 max-md:text-2xl left-2/4'>Contact Me</h1>

            <div className='w-3/4 m-24 flex max-md:flex-col sm:top-[65%] sm:mt-0 max-md:top-full max-md:mt-24 max-md:m-0 absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4'>
                <div className=" md:px-12 lg:w-2/4 lg:pl-5 lg:pr-10 rounded-2xl shadow-2xl ">
                    <div className="flex">
                        <h1 className="font-bold text-2xl">Send us a message</h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid gap-3 md:grid-cols-2 mt-5" >
                            <input className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Name" name='name' autoComplete='off' required/>
                            <input className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email" name='email' autoComplete='off' required/>
                            <input className="w-full bg-[#161616] text-[#777] mt-2 p-3 focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Subject" name='subject' autoComplete='off' required/>
                        </div>
                        <div className="my-4">
                            <textarea placeholder="Message" name='message' className="w-full h-32 bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline " autoComplete='off' required />
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4 ">
                            <button className="bg-[#009e66] text-gray-100 p-3 rounded-full w-full 
                      focus:outline-none focus:shadow-outline hover:bg-[#117351]" type='submit' value="Send"><span><SendIcon sx={{ marginLeft: "3px" }} />Send</span>
                                
                            </button>
                        </div>
                    </form>
                </div>
                <div className='pl-4 rounded-2xl shadow-2xl max-md:mt-8'>
                    <h1 className='font-bold text-2xl pb-5'>Contact Info</h1>
                    <p className='text-[#9f9f9f]'>Always available for work if the right project<br /> comes along, Feel free to contact me!</p>
                    <ul className='mt-3'>
                        <li>
                            <div className='flex pl-2 '>
                                <span className=" pt-2 pr-8">
                                    <HubIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                                </span>
                                <div className="border-l pl-8 pt-2">
                                    <h6>Name</h6>
                                    <span className='text-[#9f9f9f]'>Tushar Sahani</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex pl-2'>
                                <span className="pt-4 pr-8">
                                    <MapIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                                </span>
                                <div className="border-l pl-8 pt-4">
                                    <h6>Location</h6>
                                    <span className='text-[#9f9f9f]'>Muradnagar, Ghaziabad</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex pl-2'>
                                <span className="pt-4 pr-8">
                                    <CallIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                                </span>
                                <div className="border-l pl-8 pt-4">
                                    <h6>Call Me</h6>
                                    <span className='text-[#9f9f9f]'><a href="tel:918858521178">+91 8858521178</a></span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex pl-2 '>
                                <span className="pt-4 pr-8">
                                    <SendIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                                </span >
                                <div className="border-l pl-8 pt-4 max-sm:break-all">
                                    <h6>Email Me</h6>
                                    <span className='text-[#9f9f9f] '><a href="mailto:tusharsahani000@gmail.com">tusharsahani000@gmail.com</a></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Contact;