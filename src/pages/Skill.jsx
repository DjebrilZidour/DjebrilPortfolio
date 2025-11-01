const Skill = () => {
  return (
    <>
      <section
        id="skill"
        className="flex  flex-col gap-8 gap-8 bg-yellow-100 py-12"
      >
        <div className="flex justify-center items-center gap-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9375/9375367.png"
            alt=""
            className="md:w-24 w-16"
          />
          <h1 className="text-5xl lg:text-start">My skills</h1>
        </div>
        <div className="flex  items-center justify-center md:flex-row flex-col gap-8">
          <div className="flex flex-col justify-center items-center md:items-start gap-4 md:w-1/2 w-full md:p-0 px-6">
            <div className="flex justify-center items-start gap-4 ">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/128/10093/10093570.png"
                alt=""
              />
              <p className="text-3xl md:text-start text-center "> Create dynamic and engaging front-end user interfaces for your web application</p>
            </div>
            
            <div className="flex justify-center items-start gap-4">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/128/10093/10093570.png"
                alt=""
              />
              <p className="text-3xl md:text-start text-center "> Develop seamless and high-performance front-end solutions for web-based applications</p>
            </div>
            <div className="flex justify-center items-start gap-4">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/128/10093/10093570.png"
                alt=""
              />
              <p className="text-3xl md:text-start text-center ">I can solve your front-end issues efficiently</p>
            </div>
            <div className="flex justify-center items-start gap-4">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/128/10093/10093570.png"
                alt=""
              />
              <p className="text-3xl md:text-start text-center "> We focus on both UI and UX to ensure a seamless user experience</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 flex-col">
            <div className="flex justify-center items-center gap-8">
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="logo"
              />
            </div>
            <div className="flex justify-center items-center gap-8">
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://imgs.search.brave.com/p5MjVdZG2puGdL4uizeF2dUQHiuwXKEw6-BPZ3zlGJE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2RiL05w/bS1sb2dvLnN2Zy8y/MjBweC1OcG0tbG9n/by5zdmcucG5n"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/7544/7544562.png"
                alt="logo"
              />
            </div>
            <div className="flex justify-center items-center gap-8">
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/15466/15466163.png"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://cdn-icons-png.flaticon.com/128/16021/16021236.png"
                alt="logo"
              />
              <img
                className="md:w-20 w-20"
                src="https://www.gstatic.com/devrel-devsite/prod/v4ee13a7965e755fd92528722915d4f71c1b5395ebf52665e181807a4bbcbff16/firebase/images/lockup.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skill;
