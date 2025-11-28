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
     useEffect(() => {
     window.scrollTo({ top: 0, behavior: "auto" }); // "smooth" if you want smooth scrolling
   }, []);

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
    "https://scontent.falg6-1.fna.fbcdn.net/v/t39.30808-6/484946673_647840847892498_7813010450854505097_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfIfkolcxD-FX9HJtMVObInfinNgVuj2Gd-Kc2BW6PYbvU4jXBTZ7JnvoYjbhD6J9skvkIu6EaBC-bawjJ6ybz&_nc_ohc=scHBMhLXEJkQ7kNvwGhGYSU&_nc_oc=AdkHtaAnGyf1Gl_Dy77QJrcE8T5FkCm1SBuPcgIzpV6E91FwqNWQEs5xTuESxFMd0YM&_nc_zt=23&_nc_ht=scontent.falg6-1.fna&_nc_gid=Cm0g8PC1b4cbIihAjPjTnQ&oh=00_AfhjbOnCmIMO9hHPBbwFr5toXi9Hx6y-MCcLEI0kDHWBOQ&oe=692CBF55",
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
        <h1 className="text-5xl font-bold mb-8 text-center">Gallery</h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images1.map((src, i) => (
            <div
              key={i}
              className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
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
              className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
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
              className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`picture-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      <h1 className="text-5xl text-center mx-4 capitalize my-8">
         my participation on  <a className="text-blue-500 underline curor-pointer" href="https://www.facebook.com/photo/?fbid=345680184775234&set=pcb.345680294775223">league of robotics</a>
        </h1>  
      </div>

      <section className="flex flex-col justify-center items-center  mb-12">
        <InstagramEmbed url="https://www.instagram.com/reel/C0EBIoYI-R6/" />
        <h1 className="text-5xl text-center mx-4  my-8">
         At the end of this video, I present the concept of my robot, created as part of my participation in the Robotics League
        </h1>
      <div className="w-full max-w-5xl mx-auto py-10 px-4 space-y-14">

  {/* Video Item 1 */}
  <div className="flex flex-col items-center">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className="aspect-[9/16] w-full">
        <video
          src="https://res.cloudinary.com/dru6am4ab/video/upload/v1764078900/FILE_2025-11-25_14_54_44_xo6kbm.mp4"
          controls
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* caption */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
          A video of me presenting one of my videos to the U.S. Embassy and the CEO of the American Institute.
        </p>
      </div>
    </div>
  </div>

  {/* Video Item 2… (you can copy/paste the same structure) */}

</div>

    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Video wrapper: responsive, rounded, shadow */}
      <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden">
        {/* Aspect-ratio: use `aspect-video` (16:9). If your Tailwind doesn't include it, use aspect-[16/9] */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full block"
            src="https://www.youtube.com/embed/O8Ofj3fdFYE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* small caption / label */}
        <div className="px-4 py-3">
          <p className="text-5xl text-gray-600 text-center">The video ends with me discussing how learning English has influenced my personal and professional path</p>
        </div>
      </div>
    </div>
     <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className="aspect-[16/9] w-full">
        <video
          src="https://res.cloudinary.com/dru6am4ab/video/upload/v1764161008/vd_finale_officiele_1_zuiaas.mp4"
          controls
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* caption */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
         the international conerence filmed by me done on fghj juin 2022 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ducimus.
        </p>
      </div>
    </div>
  </div>
   <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className="aspect-[16/9] w-full">
        <video
          src="https://res.cloudinary.com/dru6am4ab/video/upload/v1764170898/time_lapse_bordj_el_kiffan_zhogmb.mp4"
          controls
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* caption */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
         i filmed this time-lapse at bprdj el kiffan algiers algeria.
        </p>
      </div>
    </div>
  </div>
   <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className="aspect-[16/9] w-full">
        <video
          src="https://res.cloudinary.com/dru6am4ab/video/upload/v1764170898/time_lapse_with_music_aw5s90.mp4"
          controls
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* caption */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
         i filmed this time-lapse at Beni saf ain timouchent algeria .
        </p>
      </div>
    </div>
  </div>
  //! ibrahim
   <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className=" w-full">
      <img src="https://res.cloudinary.com/dru6am4ab/image/upload/v1764171534/IMAGE_2025-11-26_16_38_51_dryncf.jpg" alt="" />
      </div>

      {/* caption  https://res.cloudinary.com/dru6am4ab/image/upload/v1764351940/IMAGE_2025-11-28_18_45_34_k9bnom.jpg*/}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
        my metting with ibrahim seddik taleb <br /> youtube Channel:
        </p>
      </div>
    </div>
  </div>
 //!ramzi
 <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className=" w-full">
      <img src="https://res.cloudinary.com/dru6am4ab/image/upload/v1764171512/IMAGE_2025-11-26_16_38_28_cg3zzq.jpg" alt="" />
      </div>

      {/* caption */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
        my metting with ramzi ikoirene called on social media ramzi_digital  
        instagram:
        </p>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center my-12 mx-4">
    <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden w-full max-w-xl">
      {/* wrapper for aspect ratio (vertical video → 9/16) */}
      <div className=" w-full">
      <img src="https://res.cloudinary.com/dru6am4ab/image/upload/v1764351940/IMAGE_2025-11-28_18_45_34_k9bnom.jpg" alt="" />
      </div>

      {/* caption  */}
      <div className="px-5 py-4">
        <p className="text-5xl text-gray-700 text-center font-medium">
       my meeting with the 
        </p>
      </div>
    </div>
  </div>

      </section>
    </>
  );
};

export default Pictures;
