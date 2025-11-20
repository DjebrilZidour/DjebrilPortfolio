import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav
        style={{ backgroundColor: "#FFFDCB" }}
        className="shadow-lg px-16 py-2 rounded-bl-3xl mb-2"
      >
        <ul className=" flex md:flex-row flex-col md:justify-between justify-center items-center">
          <li className="flex justify-center items-center gap-2">
            <img
              className=" p-1 h-12 w-12 "
              src="https://cdn-icons-png.flaticon.com/128/15322/15322093.png"
            />
            <h1 className="text-3xl">Djebril Zidour</h1>
          </li>

          <div id="1" className=" flex-row text-black-100 md:flex hidden ">
            <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={()=>{
                  navigate("/")
                }}
              >
                Home
              </Link>
            </li>
            <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                skill
              </Link>
            </li>
            <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                Diplomes
              </Link>
            </li>

            <li className="px-4 font-semibold text-black cursor-pointer hover:underline text-2xl capitalize">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                contact
              </Link>
            </li>
          </div>
          <div className=" md:hidden flex justify-center items-center">
            <li className="px-2 font-semibold text-black cursor-pointer hover:underline text-lg capitalize">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                Home
              </Link>
            </li>
            <li className="px-2 font-semibold text-black cursor-pointer hover:underline text-lg capitalize">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                skill
              </Link>
            </li>
            <li className="px-2 font-semibold text-black cursor-pointer hover:underline text-lg capitalize">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                Diplomes
              </Link>
            </li>

            <li className="px-2 font-semibold text-black cursor-pointer hover:underline text-lg capitalize">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                 onClick={()=>{
                  navigate("/")
                }}
              >
                contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
