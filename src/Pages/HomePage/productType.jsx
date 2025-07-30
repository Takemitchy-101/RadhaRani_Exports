import React from 'react';
import { Row, Col } from 'antd';
import type1 from '../../assets/ayurvedaIcon.png';
import type2 from '../../assets/waxIcon.png';
import type3 from '../../assets/chemicalIcon.png';
import type4 from '../../assets/oandmIcon.png';
import newRangeBG1 from '../../assets/newRangeBG1.png';
import newRangeBG2 from '../../assets/newRangeBG2.png';
import newRangeMain from '../../assets/newRangeMain.png';
import iol from '../../assets/indianOilLogo.png';

const categories = [
  { id: "Ayurvedic", icon: type1, label: 'Ayurvedic' },
  { id: "Natural Chemcials", icon: type3, label: 'Chemical' },
  { id: "Wax", icon: type2, label: 'Wax Items' },
  { id: "Metals And Oils", icon: type4, label: 'Oil & Metals' },
];

const ProductType = () => {
  return (
    <div className='bg-[#f3f8f3] relative h-full '>
      <img
        src={newRangeBG1}
        alt="decor"
        className='absolute left-0 w-[85px] md:w-[150px] opacity-80 pointer-events-none z-0'
      />
      <img
        src={newRangeBG2}
        alt="decor"
        className='absolute right-0 w-[85px] md:w-[150px] opacity-80 pointer-events-none z-0'
      />

      <div className='relative -top-5 sm:-top-5 lg:-top-15  z-10'>
        <div className="flex justify-center items-center bg-[#ffffff] lg:py-10  px-4 sm:px-6 lg:px-8 rounded-3xl max-w-[1100px] mx-auto">
          <Row
            className="w-full"
            gutter={[24, 24]}
            align="middle"
          >
            {/* Text + Categories */}
            <Col xs={24} md={12} className="flex flex-col justify-between">
              <div className="text-left mb-6">
                <h1 className="allheading">
                  Uncover Global Offerings
                </h1>
                <p className="text-base sm:text-lg text-gray-700 font-[Karla,sans-serif]">
                  Experience Premium Quality Worldwide. Our natural and
                  <br className="hidden sm:block" />
                  industrial products deliver excellence every time
                </p>
              </div>

              <Row gutter={[16, 16]} className="mt-6 sm:mt-10">
                {categories.map((item) => (
                  <Col
                    key={item.id}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="flex items-center"
                  >
                    <div
                      onClick={() => {
                        const id = `category-${item.id.replace(/\s+/g, '-').toLowerCase()}`;
                        window.location.hash = id;
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="flex flex-col min-[400px]:flex-row items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer w-full"
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
                      />
                      <span className="text-[15px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold underline headFont text-center min-[400px]:text-left">
                        {item.label}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Image */}
            <Col xs={24} md={12} className="flex justify-center mt-8 md:mt-0">
              <img
                src={newRangeMain}
                alt="Main Display"
                className="hidden md:block w-full max-w-[500px] sm:block h-auto object-contain"
              />
            </Col>
          </Row>
        </div>

        <div className="block md:hidden my-3 flex items-center justify-center space-x-3">
          <div className="p-1 border border-gray-300 rounded-md hover:shadow-sm transition-shadow duration-300">
            <img
              src={iol}
              alt="Indian Oil Logo"
              className="h-[45px] w-[45px] object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-[17px] font-medium text-gray-700 leading-tight">
            Leading Distributor <br />
            of Wax & Oil Solutions
          </p>
        </div>


      </div>
    </div>
  );
};

export default ProductType;
