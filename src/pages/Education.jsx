const Education = () => {
  return (
    <>
      <section
        id="education"
        className="flex justify-center items-center gap-4 flex-col mx-24 my-12"
      >
        <div className="flex justify-center items-center gap-8">
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/128/2231/2231453.png"
            alt=""
          />
          <h1 className="text-5xl capitalize">education</h1>
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/128/2231/2231453.png"
            alt=""
          />
        </div>

        <div className="flex justify-center items-center md:flex-row flex-col w-full gap-8 my-4">
          <div className="h-48 flex justify-center items-center flex-col w-full md:w-1/3 border-2 border-black rounded-lg bg-yellow-100">
            <h1 className="text-2xl text-center py-4">
              Ibn Badis Middle school
            </h1>
            <img
              className="rounded-xl w-24 p-4"
              src="https://cdn-icons-png.flaticon.com/128/1799/1799906.png"
            />
          </div>
          <div className="h-48 flex justify-center items-center flex-col w-full md:w-1/3 border-2 border-black rounded-lg bg-yellow-100">
            <h1 className="text-2xl text-center py-4">
              Mohamed Lbdjaoui <br /> High school
            </h1>
            <img
              className="rounded-xl w-24 p-4"
              src="https://cdn-icons-png.flaticon.com/128/569/569025.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between align-center  md:mx-32 mx-4 my-16 flex-col">
        <h1 className=" text-center text-4xl mb-5 underline ">  School Projects </h1>
        <div className="flex justify-center align-center flex-col items-center gap-8 w-full">
          <div className="bg-yellow-100 md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden shadow-xl  p-3  ">
            <iframe
              src="https://fast.wistia.net/embed/iframe/wola8acg63"
              title="Pollution Awareness Video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <h1 className="text-4xl text-center w-full"> " This project was my participation in a national contest on pollution, organized for World Environment Day on June 5, 2023."</h1>
        </div>
      </section>
    </>
  );
};
export default Education;
