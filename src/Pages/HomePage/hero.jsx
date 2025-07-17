import React from 'react';
import { Row, Col } from 'antd';
import bgImage from '../../assets/mainBG.png';
import mainPimage from '../../assets/HeroMain.png';
import hoverMain1 from '../../assets/hoverMain1.png';
import hoverMain2 from '../../assets/hoverMain2.png';
import hoverMain3 from '../../assets/hoverMain3.png';
import hoverMain4 from '../../assets/hoverMain4.png';
import NavBar from '../../components/navbar';

export const Hero = () => {
  return (
    <div className="w-full overflow-hidden relative py-5 sm:py-16 md:py-10 lg:py-1">
      {/* Navbar */}
      <div>
        <NavBar className="bg-transparent fixed top-0 left-0 w-full z-50" />
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="h-full flex flex-col justify-center px-5 md:px-10 lg:py-15 mb-5">
        <Row gutter={[24, 24]} className="items-center">

          {/* Left Column: Text */}
          <Col
            xs={24}
            sm={24}
            md={12}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-white animate-fadeInUp"
          >
            <div className="px-4 sm:px-6 md:px-8 lg:pl-24 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold leading-snug headFont">
                Authentic Ayurvedic Raw Materials,
                <br />
                {/* <span className="text-[#73BE73] block">Globally Sourced <br/>& Delivered</span> */}
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-snug mb-4 md:mb-6 headFont">
                <span className="text-[#73BE73] block">Globally Sourced & Delivered</span>
              </h1>
              <h2 className="text-base sm:text-md md:text-lg font-medium sm:font-semibold mb-4 text-white/90 subFont max-w-[600px]">
                Supplying bulk Ayurvedic herbs, oils, and natural ingredients to health brands, manufacturers, and wellness exporters worldwide.
              </h2>

              <button className="mainbutton mt-2 md:mt-4 subFont">
                Explore Our Products
              </button>

            </div>
          </Col>

          {/* Right Column: Interactive Image */}
          <Col xs={24} sm={24} md={12} className="flex justify-center items-center">
            <div className="relative group w-full h-auto max-w-[400px] md:max-w-[600px] lg:max-w-[711px] lg:-mt-[50px]">
              <div className="relative group w-full h-auto">
                <img
                  src={mainPimage}
                  alt="Main"
                  className="w-full h-[500px] hidden md:block sm:block object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:grid grid-cols-2 gap-10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  {[hoverMain1, hoverMain2, hoverMain4, hoverMain3].map((img, index) => (
                    <div
                      key={index}
                      className="w-[170px] h-[170px] overflow-hidden rounded-md shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer bg-white/80 p-1"
                      title={`Product ${index + 1}`}
                      onClick={() => console.log(`Clicked image ${index + 1}`)}
                    >
                      <img
                        src={img}
                        alt={`Hover ${index + 1}`}
                        className="w-full h-full object-cover rounded-md hover:rotate-1 transition duration-300 ease-in-out"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Hero;

