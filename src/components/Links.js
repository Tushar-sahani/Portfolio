import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import about_img from "../assets/Tushar.jpg";
import leetcode from "../assets/skills/leetcode.png"
import github from "../assets/skills/github.png"
import linkedin from "../assets/skills/linkedin.png"
import hackerrank from "../assets/skills/hackerrank.png"
const Links = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white box-border animate-fade"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div className="absolute right-1/3 top-7 max-md:right-6 max-md:top-4 ">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col max-md:pt-12">
        <div className="lg:w-3/4 w-full flex m-auto flex-col text-center p-auto p-5">
          <div className="m-auto w-full mt-16">
            <img
              src={about_img}
              className="w-[8.5%] max-md:w-24 rounded-full m-auto"
              alt="Tushar Sahani"
            />
            <h1 className="p-3">Tushar Sahani</h1>
            <p className="text-[#ffffff99] max-md:text-sm">
              Coding enthusiast and Web Developer
            </p>
          </div>
          <div className="m-auto w-1/2 max-md:w-full p-3">
            <Link to='https://github.com/Tushar-sahani' target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
              <img src={github} alt="logo" className="w-12 p-1 rounded-lg absolute" />
                <h1 className="m-auto">GitHub</h1>
              </div>
            </Link>
            <Link to='https://github.com/Tushar-sahani' target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
              <img src={linkedin} alt="logo" className="w-12 rounded-lg absolute" />
                <h1 className="m-auto font-extralight">Linkedin</h1>
              </div>
            </Link>
            <Link to='https://leetcode.com/u/Tushar_Sahani/' target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
                <img src={leetcode} alt="logo" className="w-12 rounded-lg absolute" />
                <h1 className="m-auto font-extralight">LeetCode</h1>
              </div>
            </Link>
            <Link to='https://www.hackerrank.com/profile/Tushar_Sahani' target="_blank">
              <div className="bg-[#222222] flex h-14 p-1 rounded-xl  mt-5 cursor-pointer hover:scale-105 transition ease-out">
                <img src={hackerrank} alt="logo" className="w-12 rounded-lg absolute" />
                <h1 className="m-auto font-extralight">HackerRank</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Links;
