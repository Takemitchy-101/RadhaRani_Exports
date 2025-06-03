import React from 'react';
import { Row, Col } from 'antd';
import bgImage from '../assets/mainBG.png';
import mainPimage from '../assets/HeroMain.png';
import NavBar from './navbar';

export const Hero = () => {
  return (
    <div className=" w-full overflow-hidden relative h-[55vh]  sm:h-[50vh] md:h-screen lg:h-screen">
      <div>
        <NavBar className="bg-transparent fixed top-0 left-0 w-full z-50" />
      </div>

      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
 
      <div className="h-full flex flex-col justify-center px-4 md:px-16">
        <Row
          gutter={[24, 24]}
          className="items-center flex-1"
        >
          {/* Left Column: Text */}
          <Col
            xs={24}
            md={12}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left text-white -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-30"
          >
            <div className='ml-2 sm:ml-4 md:ml-6 lg:ml-40'>

            <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 subFont">
              Your daily dose of nature’s magic starts here.
            </h2>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 md:mb-6 headFont">
              The <span>Best</span><br />
              <span className="text-[#73BE73]">Natural products</span>
            </h1>
            <button className="mainbutton mt-2 md:mt-4 subFont">
              Explore Our Products
            </button>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col
            xs={24}
            md={12}
            className="flex justify-center items-center"
          >
            <img
              src={mainPimage}
              alt="Natural Product"
              className="hidden sm:block w-full h-auto object-contain max-w-[711px] md:max-w-[711px] lg:-mt-50"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
