// import React from 'react';
// import bgImage from '../assets/needBG.png';
// import commonIcon from '../assets/needLogo.png';
// import logo1 from '../assets/needIcon1.png';
// import logo2 from '../assets/needIcon2.png';
// import logo3 from '../assets/needIcon3.png';
// import logo4 from '../assets/needIcon4.png';
// import { Row, Col } from 'antd';

// const WhatYouNeed = () => {
//     const methodData = [
//         {
//             id: 1,
//             Image: logo1,
//             title: "Organic Product",
//             subtitle: "Operates within regulations, ensuring safety and legal compliance",
//         },
//         {
//             id: 2,
//             Image: logo2,
//             title: "Extraction Procedure",
//             subtitle: "Operates within regulations, ensuring safety and legal compliance",
//         },
//         {
//             id: 3,
//             Image: logo3,
//             title: "Formulations",
//             subtitle: "Operates within regulations, ensuring safety and legal compliance",
//         },
//         {
//             id: 4,
//             Image: logo4,
//             title: "Delivery",
//             subtitle: "Operates within regulations, ensuring safety and legal compliance",
//         },
//     ];

//     return (
//         <div className="relative min-h-screen px-4 md:px-20 py-10">

//             <div
//                 className="absolute top-0 left-0 w-full h-full -z-10"
//                 style={{
//                     backgroundImage: `url(${bgImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             />

//             <div className="text-center mb-16">
//                 <div className="flex items-center justify-center mb-6">
//                     <div className="h-px w-20 bg-white" />
//                     <div className="h-16 w-16 mx-6 flex items-center justify-center">
//                         <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
//                     </div>
//                     <div className="h-px w-20 bg-white" />
//                 </div>
//                 <h2 className="text-4xl font-semibold text-white headFont">We Are What You Need</h2>
//                 <p className="text-lg text-white mt-4 max-w-3xl mx-auto subFont">
//                     Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
//                 </p>
//             </div>

//             <Row gutter={[32, 32]} justify="center" align="middle">
//                 {methodData.map((item, index) => (
//                     <Col xs={24} sm={12} md={12} lg={6} xl={6} key={item.id} className="relative flex flex-col items-center text-center ">
//                         <img src={item.Image} alt={item.title} className="h-[200px] w-[200px] mb-4 ml-22 md:ml-15
// " />
//                         <h3 className="text-xl font-semibold text-white mb-2 headFont">{item.title}</h3>
//                         <p className="text-sm text-white subFont">{item.subtitle}</p>

//                         {/* Connector line and icon except after last item */}
//                         {/* {index < methodData.length - 1 && (
//                             <div className="absolute top-1/2 right-[-20%]  hidden md:block">
//                                 <div className="flex items-center">
//                                     <div className="w-24 h-px bg-green-400" />
//                                     <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center ml-2">
//                                         <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                                             <path d="M6 4l8 6-8 6V4z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                         )} */}
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };

// export default WhatYouNeed;


import React from 'react';
import bgImage from '../assets/needBG.png';
import commonIcon from '../assets/needLogo.png';
import logo1 from '../assets/needIcon1.png';
import logo2 from '../assets/needIcon2.png';
import logo3 from '../assets/needIcon3.png';
import logo4 from '../assets/needIcon4.png';
import { Row, Col } from 'antd';

const WhatYouNeed = () => {
  const methodData = [
    {
      id: 1,
      Image: logo1,
      title: "Organic Product",
      subtitle: "Harvested ethically, chemical-free, promoting well-being naturally.",
    },
    {
      id: 2,
      Image: logo2,
      title: "Extraction Procedure",
      subtitle: "Isolating specific substances from complex materials effectively and precisely.",
    },
    {
      id: 3,
      Image: logo3,
      title: "Formulations",
      subtitle: "Combining substances accurately to achieve specific product characteristics.",
    },
    {
      id: 4,
      Image: logo4,
      title: "Delivery",
      subtitle: "Ensuring products reach destinations efficiently and securely.",
    },
  ];

  return (
    <div className="relative px-4 md:px-20 py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-20 bg-white" />
          <div className="h-16 w-16 mx-6 flex items-center justify-center">
            <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
          </div>
          <div className="h-px w-20 bg-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white headFont">
          We Are What You Need
        </h2>
        <p className="text-base sm:text-lg text-white mt-4 max-w-3xl mx-auto subFont">
          Your journey to natural wellness begins here, with our trusted range of solutions for every need.
        </p>
      </div>

      {/* Grid Items */}
      <Row gutter={[24, 32]} justify="center">
        {methodData.map((item) => (
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            key={item.id}
            className="flex flex-col items-center text-center space-y-3 px-2"
          >
            <img
              src={item.Image}
              alt={item.title}
             className="w-3/4 sm:w-2/3 md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto object-contain mb-2 ml-10 sm:ml-8 md:ml-15 lg:ml-3 xl:ml-15"

            />
            <h3 className="text-lg sm:text-xl font-semibold text-white headFont">{item.title}</h3>
            <p className="text-sm text-white subFont px-2">
              {item.subtitle}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhatYouNeed;
