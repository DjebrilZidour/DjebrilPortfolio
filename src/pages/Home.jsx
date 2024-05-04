import { React } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="flex lg:justify-between lg:items-center items-start  my-8 home px-12  ">
        
        <div className="flex flex-col lg:items-start lg:items-start lg:justify-center lg:w-1/2 lg:gap-4 gap-12 mt-24">
          <h1 className="text-5xl ">
            My Name is{" "}
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
          <p className="text-3xl">
            an Algerian student living in algeirs , I'm 16 years old i have
            about 4 years in the field of web development actually I have some
            hobbies that i enjoy doing it like photography{" "}
            <span className="text-red-600 cursor-pointer">
              check my pictures
            </span>{" "}
            and biking well you can see my skills on development by scrolling on
            this portfolio
          </p>
          <div className="flex justify-center items-center gap-4">
          <a target="new" href="https://github.com/DjebrilZidour">
              <div  className="border px-4 py-2 hover:bg-red-500 hover:text-white bg-white rounded-xl text-2xl capitalize uppercase flex justify-center items-center gap-4 cursor-poiter">
                
                <p className="cursor-pointer">my Github </p>
                <img
                  className="w-8 h-8"
                  src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                />
              
               
              </div>
              </a>
           
            <button className="border px-4 py-2 bg-white hover:bg-red-500 hover:text-white rounded-xl text-2xl capitalize uppercase">
              {" "}
              Hire Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
