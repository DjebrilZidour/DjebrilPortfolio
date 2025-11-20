import React from "react";
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
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674294/IMAGE_2025-11-20_22_31_27_gg5zy9.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674332/IMAGE_2025-11-20_22_32_05_kirhbf.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674806/IMAGE_2025-11-20_22_40_00_nsxue7.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674873/IMAGE_2025-11-20_22_41_06_uickom.jpg",
    "https://res.cloudinary.com/dru6am4ab/image/upload/v1763674889/IMAGE_2025-11-20_22_41_22_rleqvq.jpg",
  ];
   return (
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
      <h1 className="text-5xl text-center my-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium!</h1>
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
    </div>
  );
 };




export default Pictures
  

  