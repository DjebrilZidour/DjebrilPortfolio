import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function InstagramEmbed({ url }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    
     <blockquote
  className="instagram-media"
  data-instgrm-permalink={url}
  style={{
    
    background: "#FFF",
  
  
   
  }}
></blockquote>

  
  );
}

const Pictures = () => {
  const images1 = [
    // Add your image links here
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674294/IMAGE_2025-11-20_22_31_27_gg5zy9.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674332/IMAGE_2025-11-20_22_32_05_kirhbf.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674806/IMAGE_2025-11-20_22_40_00_nsxue7.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674873/IMAGE_2025-11-20_22_41_06_uickom.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674889/IMAGE_2025-11-20_22_41_22_rleqvq.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763675220/IMAGE_2025-11-20_22_46_52_bgg5oo.jpg",
  ];
  const images2 = [
    // Add your image links here
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674316/IMAGE_2025-11-20_22_31_48_mdvini.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763673720/IMAGE_2025-11-20_22_21_50_hajuab.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763675461/IMAGE_2025-11-20_22_50_54_b9prri.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674517/IMAGE_2025-11-20_22_35_08_zryx5e.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674518/IMAGE_2025-11-20_22_35_10_dnzdsg.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674511/IMAGE_2025-11-20_22_35_03_xvq08e.jpg",
  ];
  const images3 = [
    // Add your image links here
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763675954/IMAGE_2025-11-20_22_59_08_mtqr4t.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763675906/IMAGE_2025-11-20_22_58_18_ye5po1.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1764078904/IMAGE_2025-11-25_14_54_55_i1bq1f.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1764079651/IMAGE_2025-11-25_15_07_28_fyfvi9.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1764079640/IMAGE_2025-11-25_15_07_16_apkfgf.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1764079238/IMAGE_2025-11-25_15_00_33_jx2kd5.jpg",
  ];
  const videos = [
    {
      src: "https://res.cloudinary.com/dru6am4ab/video/upload/v1764078900/FILE_2025-11-25_14_54_44_xo6kbm.mp4",
      title: "Amazing Vertical Video",
      description:
        "A short description of the vertical video. Perfect for portrait-style content.",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      title: "Creative Demo",
      description:
        "A brief description about this vertical video. Keep it concise and visually appealing.",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Fun Demo",
      description: "Another vertical video with a small description below it.",
    },
    // Add more videos if needed
  ];
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen px-6 py-10 bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center">My Gallery</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images1.map((src, i) => (
            <div
              key={i}
              className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`picture-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h1 className="text-5xl text-center my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          laudantium!
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images2.map((src, i) => (
            <div
              key={i}
              className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`picture-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h1 className="text-5xl text-center my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          laudantium!
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images3.map((src, i) => (
            <div
              key={i}
              className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`picture-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
      </div>
      <section className="flex flex-col justify-center items-center  mb-12">
        <InstagramEmbed url="https://www.instagram.com/reel/C0EBIoYI-R6/" />
        <h1 className="text-5xl text-center my-12 mx-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          laudantium!
        </h1>
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            <video
              src={video.src}
              controls
              className="w-64 md:w-72 lg:w-80 aspect-[9/16] rounded-2xl shadow-lg"
            ></video>
            <div className="text-center mt-3 max-w-xs">
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                {video.title}
              </h2>
              <p className="text-gray-700 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>
    </>
  );
};

export default Pictures;
