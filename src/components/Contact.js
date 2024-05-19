import CloseIcon from "@mui/icons-material/Close";
import HubIcon from "@mui/icons-material/Hub";
import MapIcon from "@mui/icons-material/Map";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Add Your Email.js Details here
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message Send Succesfully");
        },
        (error) => {
          console.log(error.text);
          // alert(error.text);
          alert("Add you Email.js Detail First");
        }
      );
  };
  return (
    <div className="text-white animate-fade " style={{ fontFamily: "Poppins,sans-serif" }}>
      <div className="absolute right-14 top-7 max-md:right-6 max-md:top-4 ">
        <button
          onClick={backHome}
          className="after:border-2 after:border-[#009e66] after:w-4/5 after:h-4/5 after:animate-ping after:ease-out after:absolute after:rounded-full after:right-1 after:top-1"
        >
          <CloseIcon sx={{ fontSize: "38px", color: "#009e66" }} />
        </button>
      </div>
      <div className="flex align-middle justify-center flex-col">
        <div className="m-auto p-20 text-center">
          <p className="text-thin text-[#9f9f9f] ">
            Feel free to contact Me Anytime
          </p>
          <h1 className=" text-4xl pt-6">
            Contact Me
          </h1>
        </div>
        <div className="w-3/4 flex m-auto justify-center max-md:flex-col max-md:mb-5">
          <div className=" md:px-12 lg:w-2/4 lg:pl-5 lg:pr-10 rounded-2xl shadow-2xl ">
            <div className="flex">
              <h1 className="font-bold text-2xl">Send us a message</h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-3 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                  autoComplete="off"
                  required
                />
                <input
                  className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  required
                />
                <input
                  className="w-full bg-[#161616] text-[#777] mt-2 p-3 focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="w-full h-32 bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline "
                  autoComplete="off"
                  required
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4 ">
                <button
                  className="bg-[#009e66] text-gray-100 p-3 rounded-full w-full 
                      focus:outline-none focus:shadow-outline hover:bg-[#117351]"
                  type="submit"
                  value="Send"
                >
                  <span>
                    <SendIcon sx={{ marginLeft: "3px" }} />
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="pl-4 rounded-2xl shadow-2xl max-md:mt-8">
            <h1 className="font-bold text-2xl pb-5">Contact Info</h1>
            <p className="text-[#9f9f9f]">
              Always available for work if the right project
              <br /> comes along, Feel free to contact me!
            </p>
            <ul className="mt-3">
              <li>
                <div className="flex pl-2 ">
                  <span className=" pt-2 pr-8">
                    <HubIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-2">
                    <h6>Name</h6>
                    <span className="text-[#9f9f9f]">Tushar Sahani</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <MapIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Location</h6>
                    <span className="text-[#9f9f9f]">
                      Muradnagar, Ghaziabad
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <CallIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Call Me</h6>
                    <span className="text-[#9f9f9f]">
                      <a href="tel:xxxxxxxxx">+91 xxxxxxxx</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2 ">
                  <span className="pt-4 pr-8">
                    <SendIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4 max-sm:break-all">
                    <h6>Email Me</h6>
                    <span className="text-[#9f9f9f] ">
                      <a href="mailto:Addyourgmailhere">
                        Your Email here
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
