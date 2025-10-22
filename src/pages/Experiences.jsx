const Experiences = () => {
  return (
    <>
    <section className="bg-yellow-100 py-8" id="experience">
      <h1 className="md:text-5xl text-center my-8">Diplomes</h1>
      <div className="flex justify-center items-center flex-col gap-8 md:mx-12">
        <div className="flex justify-center items-center flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 ">
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/4ShX8Qq/udacity-the-first-certificate.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              Full stack web development
            </h1>
            <p className="uppercase">By Udacity</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 ">
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/17gm4tc/Djebril-Zidour-certificate-C1-1.jpg"
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              English C1.1 level
            </h1>
            <p className="uppercase"> by American institute</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> //! dip 3
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/GDfCphT/Screen-Shot-2025-09-10-at-12-00-27-AM.png"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              Complete Facebook Ads Course 
            </h1>
            <p className="uppercase">by izi road</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 ">//! dip 4
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/dwGWbR7X/robotic-originale-rotated.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              robotic and arduino 
            </h1>
            <p className="uppercase">by Techmology</p>
          </div>
        </div>
         <div className="flex justify-center items-center flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> //! dip 5
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/sd8x6Kmh/into-marketing-digitle-rotated.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
             introduction to marketing digital
            </h1>
            <p className="uppercase">By Code 213</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> //! dip 6
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/17gm4tc/Djebril-Zidour-certificate-C1-1.jpg"
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              English C1.1 level
            </h1>
            <p className="uppercase"> by American institute</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> //! dip 7
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/KcMMm9Hr/aikifdou-ceinture-ble-traduction-rotated.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              Aikido attestaion blue belt
            </h1>
            <p className="uppercase">by n.r.b.b.e</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> //! dip 8
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/Y7W4GcSH/attestation-Galop-4.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
             Galop 4 
            </h1>
            <p className="uppercase">by FFE</p>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col justify-center items-center my-12">
      <h1 className="text-6xl py-8 underline text-center">Currently Working On</h1>
      <h1 className="text-5xl text-green-500 ">DJEBRIL ACADEMY</h1>
      <div className="flex flex-col  justify-center items-center ">
       <h2> Check it out  :</h2>
       <div><img className="w-48 border-2 border-black rounded-3xl " src="https://djebrilacademy.com/assets/logo-8bfc97e1.png" alt="" /></div>
       <button className=" mt-12 border px-4 py-2 bg-white hover:bg-green-500 hover:text-white rounded-xl text-2xl capitalize uppercase"> <a href="https://djebrilacademy.com/">OPEN THE PLATFORM</a> </button>
      </div>
    </section>
     
   
    </>
  );
};
export default Experiences;
