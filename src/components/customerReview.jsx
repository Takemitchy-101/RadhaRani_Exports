// import React from 'react';
// import commonIcon from '../assets/commonIcon.png';
// import img1 from '../assets/pImage1.png';
// import img2 from '../assets/pImage2.png';
// import bg from '../assets/rightbgBestSvc.png';
// import { Row, Col } from 'antd';

// export const CustomerReview = () => {
//   const reviewinfo = [
//     {
//       id: 1,
//       stars: "★☆☆☆☆",
//       review:
//         "Experience unmatched quality with our top-rated service, designed to exceed your expectations every time. Experience unmatched quality with our top-rated service, designed to exceed your expectations.",
//       pImage: img1,
//       name: "Eleiner",
//       profession: "Professor",
//     },
//     {
//       id: 2,
//       stars: "★★★☆☆",
//       review:
//         "Experience unmatched quality with our top-rated service, designed to exceed your expectations every time. Experience unmatched quality with our top-rated service, designed to exceed your expectations.",
//       pImage: img2,
//       name: "Eleiner",
//       profession: "Developer",
//     },
//     {
//       id: 3,
//       stars: "★★★☆☆",
//       review:
//         "Experience unmatched quality with our top-rated service, designed to exceed your expectations every time. Experience unmatched quality with our top-rated service, designed to exceed your expectations.",
//       pImage: img2,
//       name: "Eleiner",
//       profession: "Developer",
//     },
//   ];

//   return (
//     <div className="relative py-20 px-4 sm:px-10 md:px-20 bg-white overflow-hidden">
//       <img
//         src={bg}
//         alt="decor"
//         className="absolute left-0 w-[85px] md:w-[200px] opacity-80 pointer-events-none z-0"
//       />

//       <div className="text-center mb-16 relative z-10">
//         <div className="flex items-center justify-center mb-4">
//           <div className="custom-line" />
//           <div className="h-16 w-16 mx-6 flex items-center justify-center">
//             <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
//           </div>
//           <div className="custom-line" />
//         </div>
//         <h2 className="text-4xl font-bold text-gray-800">Happy Customers</h2>
//         <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
//           Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
//         </p>
//       </div>

//       {/* Reviews */}
//       <Row gutter={[24, 24]} className="relative z-0" align="center">
//         {reviewinfo.map((item) => (
//           <Col key={item.id} xs={24} md={8}>
//             <div className="bg-white border rounded-xl text-center p-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer h-full">
//               <div className="text-black text-xl mb-4">{item.stars}</div>
//               <p className="text-gray-700 mb-6 text-sm leading-relaxed">{item.review}</p>
//               <div className="flex flex-col items-center">
//                 <img
//                   src={item.pImage}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mb-3"
//                 />
//                 <div className="text-lg font-semibold text-black">{item.name}</div>
//                 <div className="text-sm text-gray-500">{item.profession}</div>
//               </div>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default CustomerReview;
    

import React from 'react';
import Slider from "react-slick";
import commonIcon from '../assets/commonIcon.png';
import img1 from '../assets/pImage1.png';
import img2 from '../assets/pImage2.png';
import bg from '../assets/rightbgBestSvc.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomerReview = () => {
  const reviewinfo = [
    {
      id: 1,
      stars: "★☆☆☆☆",
      review: "This Ayurvedic wax product is truly remarkable. Its natural blend offers gentle, effective results, leaving skin feeling soft and genuinely cared for. Highly recommend for holistic wellness.",
      pImage: img1,
      name: "Eleiner",
      profession: "Professor",
    },
    {
      id: 2,
      stars: "★★★☆☆",
      review: "This Ayurvedic wax product is truly remarkable. Its natural blend offers gentle, effective results, leaving skin feeling soft and genuinely cared for. Highly recommend for holistic wellness.",
      pImage: img2,
      name: "Eleiner",
      profession: "Developer",
    },
    {
      id: 3,
      stars: "★★★☆☆",
      review: "This Ayurvedic wax product is truly remarkable. Its natural blend offers gentle, effective results, leaving skin feeling soft and genuinely cared for. Highly recommend for holistic wellness.",
      pImage: img2,
      name: "Eleiner",
      profession: "Developer",
    },
    {
      id: 4,
      stars: "★★★★☆",
      review: "This Ayurvedic wax product is truly remarkable. Its natural blend offers gentle, effective results, leaving skin feeling soft and genuinely cared for. Highly recommend for holistic wellness.",
      pImage: img2,
      name: "Eleiner",
      profession: "Developer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative py-20 px-4 sm:px-10 md:px-20 bg-white overflow-hidden">
      <img
        src={bg}
        alt="decor"
        className="absolute left-0 w-[85px] md:w-[200px] opacity-80 pointer-events-none z-0"
      />

      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="custom-line" />
          <div className="h-16 w-16 mx-6 flex items-center justify-center">
            <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
          </div>
          <div className="custom-line" />
        </div>
        <h2 className="allheading">Happy Customers</h2>
        <p className="alldes">
         Our greatest achievement is fostering delighted and loyal customers, whose satisfaction fuels our growth and inspires our continuous improvement.
        </p>
      </div>

      {/* Slider for Reviews */}
      <Slider {...settings}>
        {reviewinfo.map((item) => (
          <div key={item.id} className="px-4">
            <div className="bg-white border rounded-xl text-center p-5 transform transition-transform duration-300 ease-in-out scale-98 hover:scale-100 hover:shadow-xl h-full">
              <div className="text-black text-xl mb-4 headFont">{item.stars}</div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed subFont  line-clamp-2">{item.review}</p>
              <div className="flex flex-col items-center">
                <img
                  src={item.pImage}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mb-3"
                />
                <div className="text-lg font-semibold text-black headFont">{item.name}</div>
                <div className="text-sm text-gray-500 subFont">{item.profession}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReview;
