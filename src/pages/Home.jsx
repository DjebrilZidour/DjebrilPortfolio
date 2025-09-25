import { React } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="home"
        className="flex md:flex-row flex-col lg:justify-between lg:items-center items-start md:px-12 px-6 py-4"
      >
        <div className="flex flex-col md:items-start md:items-start md:justify-center md:w-1/2 lg:gap-4 gap-12 md:gap-4 md:p-4 p-2">
          <h1 className=" text-4xl text-center md:hidden">
            My Name is : <br />{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Djebril Zidour",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
                "Djebril Zidour",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "#FC4100",
              }}
              repeat={Infinity}
            />
          </h1>
          <h1 className=" text-3xl hidden lg:hidden md:block ">
            My Name is :{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Djebril Zidour",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
                "Djebril Zidour",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "#FC4100",
              }}
              repeat={Infinity}
            />
          </h1>
          <h1 className="text-6xl hidden lg:block">
            My Name is :{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Djebril Zidour",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
                "Djebril Zidour",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "#FC4100",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-2xl md:text-start text-center">
            I'm a passionate front-end web developer based in Algiers, Algeria,
            with around 4 years of experience in building dynamic, responsive
            websites and applications. I love bringing ideas to life through
            clean, efficient code and a keen eye for design. Beyond coding, I
            enjoy capturing moments through photography and exploring the world
            on my bike. Scroll through my portfolio to check out my work and the
            skills I bring to the table.
          </p>
          <div className="flex justify-center items-center gap-4 md:flex-row flex-col">
            <a target="new" href="https://github.com/DjebrilZidour">
              <div className="border px-4 py-2 hover:bg-red-500 hover:text-white bg-white rounded-xl text-2xl capitalize uppercase flex justify-center items-center gap-4 cursor-poiter">
                <p className="cursor-pointer">my Github </p>
                <img
                  className="w-8 h-8"
                  src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                />
              </div>
            </a>

            <button onClick={()=>{
              navigate("mailto:djebril.zidour.pro@gmail.com")
            }} className="border px-4 py-2 bg-white hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
              {" "}
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full py-4">
          {" "}
          <img
            className="md:px-8 lg:px-12 w-full"
            src="https://i.ibb.co/9WyBmLY/Design-sans-titre-1.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};
export default Home;
