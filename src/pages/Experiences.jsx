import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate= useNavigate()
  return (
    <>
    <section className="bg-yellow-100 py-8" id="experience">
      <h1 className="text-6xl  underline text-center my-8">Diplomes</h1>
      <div className="flex justify-center items-center flex-col-reverse gap-8 md:mx-12">
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
              src="https://i.ibb.co/KcMMm9Hr/aikifdou-ceinture-ble-traduction-rotated.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
              Aikido attestaion blue belt
            </h1>
            <p className="uppercase">by n.r.b.b.e</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 ">
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
          
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 ">
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
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> 
            <img
              className="w-3/4 border-2 border-black "
              src="https://i.ibb.co/GQ2nbVX1/Djebril-zidour.jpg"
              alt=""
            />
            <h1 className="capitalize md:text-3xl text-2xl">
             Full-Stack JavaScript Program
            </h1>
            <p className="uppercase">by Gomy Code</p>
          </div>
           <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> 
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
          
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4">
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> 
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
          <div className="flex flex-col justify-center items-center md:w-1/2  gap-4 "> 
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
           <div className="bg-yellow-100 md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden shadow-xl  p-3  ">
            <iframe
              src="https://fast.wistia.net/embed/iframe/0bdha7280t"
              title="future job english homework"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <h1 className="text-4xl text-center w-full"> " This project was a middle school homework "</h1>
           
        </div>
      </section>
      <section className="flex justify-between align-center  md:mx-32 mx-4 my-16 flex-col">
        <h1 className=" text-center text-4xl mb-5 underline capitalize ">  Courses Projects + random videos by me </h1>
        <div className="flex justify-center align-center flex-col items-center gap-8 w-full">
          <div className="bg-yellow-100 md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden shadow-xl  p-3  ">
            <iframe
              src="https://fast.wistia.net/embed/iframe/jw3cregqri"
              title="Gomy code final video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <h1 className="text-4xl text-center w-full"> " This project was part of the final exam on gomy code exam to explain the ........."</h1>
           <div className="bg-yellow-100 md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden shadow-xl  p-3  ">
            <iframe
              src="https://fast.wistia.net/embed/iframe/f60qozgezu"
              title="americain institute test"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <h1 className="text-4xl text-center w-full"> " This project was part of the final test at american insititute to pass the C 2.1 test "</h1>
            <div className="bg-yellow-100 md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden shadow-xl  p-3  ">
            <iframe
              src="https://fast.wistia.net/embed/iframe/htsmoefsyi"
              title="time lapse"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <h1 className="text-4xl text-center w-full"> " This was my shot for the sunset in biskra on 2022 "</h1>
        
                    <img className="rounded-3xl"  src="https://i.ibb.co/Kz7rtWRb/IMAGE-2025-11-01-01-00-16.jpg" alt="" />
            
         
          <h1 className="text-4xl text-center w-full"> " behind the scene "</h1>
           <div className="grid grid-cols-2 gap-4 gap-4">
            <img className="rounded-3xl w-96" src="https://i.ibb.co/NgxVZW8L/1.png" alt="" />
            <img className="rounded-3xl w-96" src="https://i.ibb.co/rRsWfvqP/2.png" alt="" />
            <img className="rounded-3xl w-96" src="https://i.ibb.co/LzR2gY78/3.png" alt="" />
            <img className="rounded-3xl w-96" src="https://i.ibb.co/JR5vYgTH/5.png" alt="" />
           </div>
           <h1 className="text-4xl text-center w-full"> " some pics by me and for me on my visit to french on 2023.. "</h1>
          <button onClick={()=>{
            navigate("/pictures")
          }}className=" border px-8 py-2 bg-green-100  hover:bg-green-500 hover:text-white rounded-xl text-4xl capitalize uppercase">GALLERY</button>

        </div>
      </section>
    <section className="flex flex-col justify-center items-center my-12">
      <h1 className="text-6xl py-8 underline text-center">Currently Working On</h1>
      <h1 className="text-5xl text-green-500 ">DJEBRIL ACADEMY</h1>
      <div className="flex flex-col  justify-center items-center  ">
       <h2> Check it out  :</h2>
       <div><img className="w-48 border-2 border-black rounded-3xl " src="https://djebrilacademy.com/assets/logo-8bfc97e1.png" alt="" /></div>
       <button className=" mt-12 border px-4 py-2 bg-green-100  hover:bg-green-500 hover:text-white rounded-xl text-2xl capitalize uppercase"> <a href="https://djebrilacademy.com/">OPEN THE PLATFORM</a> </button>
      </div>
      
    </section>
     
   
    </>
  );
};
export default Experiences;
