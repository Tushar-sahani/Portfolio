import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import about_img from "../assets/Tushar.jpg";
import Home from "./Home";

const About = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white box-border"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20">
          <p className="text-thin text-[#9f9f9f]">Get to Know About Me</p>
          <h1 className=" text-5xl">About</h1>
        </div>
        <div className="lg:w-3/4 max-md:w-full flex m-auto sm:max-lg:flex-col sm:max-lg:text-center sm:max-lg:p-auto max-md:flex-col max-md:text-center max-md:p-auto">
          <img
            src={about_img}
            className="w-1/3 max-md:mb-7 max-md:max-lg:w-1/4 max-md:border-2 sm:max-lg:rounded-full sm:max-lg:m-auto sm:max-lg:mt-16 max-md:w-1/3 max-md:border-1 max-md:rounded-full max-md:m-auto"
            alt="Tushar Sahani"
          />

          <div className="ml-14 max-md:ml-0">
            <div className="p-5 ">
              <h1 className="text-[#009e66] text-2xl p-2 -mt-5 sm:max-lg:mr-10">
                Who am i?
              </h1>
              <h1 className="text-3xl font-bold p-3 max-md:text-xl">
                I'm Tushar Sahani, Full Stack Developer and Java Programmer
              </h1>
              <p className="text-[#9f9f9f] p-2">
                I am a B.Tech undergraduate student in Computer Science with a
                passion of developing solutions and a craving learner. I enjoy
                working in Java and with Technical Societies. Deeply value
                project based learning experiences and working in a team.
                Creating value and impact to bring about a change.
              </p>
              <hr className="text-[#9f9f9f] mt-6" />
            </div>
            <div className="flex flex-col max-md:ml-5">
              <div className="flex max-md:flex-col max-md:p-0 p-2 ">
                <div className="flex pl-4 max-md:pl-0">
                  <span>Name:</span>
                  <p className="pl-2 text-[#9f9f9f]">Tushar Sahani</p>
                </div>
                <div className="flex pl-40 max-md:pl-0">
                  <span>Email:</span>
                  <p className="pl-2 text-[#009e66] hover:text-[#346b57] cursor-pointer">
                    <a href="mailto:tusharsahani000@gmail.com">
                      tusharsahani000@gmail.com
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="flex max-md:flex-col  max-md:p-0 p-2">
                <div className="flex max-md:pl-0 pl-4">
                  <span>Age:</span>
                  <p className="pl-2 text-[#9f9f9f]">21</p>
                </div>
                <div className="flex pl-[283px] max-md:pl-0">
                  <span>Live: </span>
                  <p className="pl-2 text-[#9f9f9f]">Deoria, Uttar Pradesh</p>
                </div>
              </div>
            </div>
            <div>
              <button class="mt-2 ml-5 bg-[#009e66] hover:bg-[#0e522b] text-white font-bold py-2 px-4 rounded-full mb-3">
                <Link to="https://drive.google.com/file/d/1XqMYQqeL8zOceE_SJIa2SC8Z42vJYp-4/view">
                  Download CV
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
