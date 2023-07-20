import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate("/");
    }
    return (
        <div className="bg-[#111] text-white  h-[1370px] max-sm:h-[1650px]" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="absolute right-14 top-7">
                <button onClick={backHome}><CloseIcon sx={{ fontSize: '38px' }} /></button>
            </div>
            <p className='text-thin text-[#9f9f9f] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[102px] text-center'>Check out my Resume</p>
            <h1 className='absolute text-5xl -translate-x-2/4 -translate-y-2/4 top-40 left-2/4'>Resume</h1>

            <div className="flex align-middle absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-md:-translate-y-[39%] mt-52 max-sm:mt-56 max-sm:flex-col">
                {/* Education */}
                <div className=" lg:pr-20">
                    <h1 className='text-2xl mb-5 text-[#009e66]'>Education</h1>
                    <div className="card w-[500px] max-lg:w-[335px] box-border  bg-[#161616] lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8  border-b border-l-[#009e66] border-l-2">
                        {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4 after:border-transparent'></span> */}
                        <h1 className=' inline text-xl'>KIET Group of Institution</h1>
                        <p className='text-[rgb(159,159,159)] text-base pb-2 pt-2 '>Ghaziabad  <span className='text-[13px]'>(Nov'21 - Jun'25)</span></p>
                        <p className='text-[#9f9f9f] text-[13px] pb-2'>Bachelors degree in Computer Science ( GPA : 8.9 )</p>
                    </div>
                    <div className="max-lg:w-[335px] w-[500px]  bg-[#161616] border-b  lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-b- border-l-[#009e66] border-l-2">
                        {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4'></span> */}
                        <h1 className='inline text-xl'>Central Hindu School</h1>
                        <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Gorakhpur <span className='text-[13px]'>(Apr'18 - May-'20)</span></p>
                        <p className='text-[#9f9f9f] text-[13px]'>Intermediate ( CBSE ), Science ( Score: 85.4% ) </p>
                    </div>
                    <div className="max-lg:w-[335px] w-[500px]  bg-[#161616] lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                        {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4 '></span> */}
                        <h1 className='inline text-xl'>Oxford Public School</h1>
                        <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Gorakhpur <span className='text-[13px]'>(May'16 - Apr'18)</span></p>
                        <p className='text-[#9f9f9f] text-[13px]'>High School ( CBSE )  ( Score: 77%)</p>
                    </div>
                </div>
                {/* Experience */}
                <div className="max-sm:mt-4 pl-20 max-lg:pl-5 max-sm:pl-0">
                    <h1 className='text-2xl mb-5 text-[#009e66]'>Experience</h1>
                    <div className="max-lg:w-[335px] w-[500px] bg-[#161616] lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                        {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4 '></span> */}
                        <h1 className='inline text-xl'>Summer Internship</h1>
                        <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Ghaziabad (Aug'22 - Sep'22)</p>
                        <ul className='list-disc text-[#9f9f9f] text-[12px]'>
                            <li><p>Learnt Python During Internship </p></li>
                            <li><p>Worked on a mini project using Web Development. A project based on Contibution
                                and Spliting of money within Group</p></li> </ul>
                    </div>
                    {/* <div className="max-lg:w-[335px] w-[500px]  box-border bg-[#161616] lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-b border-l-[#009e66] border-l-2">
                        <h1 className='inline text-xl'>KIET Group of Institution</h1>
                        <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Muradnager, Ghaziabad</p>
                        <p className='text-[#9f9f9f] text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam doloribus maxime</p>
                    </div>
                    <div className="max-lg:w-[370px] w-[500px] bg-[#161616] lg:pt-8 lg:pl-12 lg:pb-8 lg:pr-12 max-lg:pt-4 max-lg:pl-8 max-lg:pb-4 max-lg:pr-8 border-l-[#009e66] border-l-2">
                        <h1 className='inline text-xl'>KIET Group of Institution</h1>
                        <p className='text-[#9f9f9f] text-base pb-2 pt-2'>Muradnager, Ghaziabad</p>
                        <p className='text-[#9f9f9f] text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam doloribus maxime</p>
                    </div> */}
                </div>
            </div>

            <div className="flex align-middle absolute top-full left-2/4 -translate-x-2/4 -translate-y-2/4 mt-60   max-sm:mt-[608px]">
                <div className='lg:mt-80 max-md:w-full'>
                    <div className=' absolute lg:-left-20 max-md:text-center'>
                        <p className="text-thin text-[#9f9f9f] max-md:ml-10">My level of knowledge in some tools</p>
                        <h1 className='text-4xl pt-3'>My Skills</h1>
                    </div>

                    <div class="grid grid-rows-4 grid-flow-col max-sm:grid-flow-row lg:gap-7 lg:gap-x-60 mt-32">
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">C</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3 bg-green-600 rounded-full dark:bg-green-500' id="file" value="95" max="100"> </progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">JavaScript </label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="85" max="100"></progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">Django</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="80" max="100"></progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">MySql</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="55" max="100"> 32% </progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">HTML/CSS</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="98" max="100"> 32% </progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">React</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="90" max="100"> 32% </progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">Python</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="70" max="100"> 32% </progress>
                        </div>
                        <div className='w-96 max-md:w-80'>
                            <label className='block' for="file">Java</label>
                            <progress className='w-[500px] max-sm:w-[300px] max-lg:w-[350px] h-3' id="file" value="83" max="100"> 32% </progress>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resume;