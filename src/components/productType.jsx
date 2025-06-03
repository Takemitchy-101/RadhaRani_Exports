import React from 'react';
import { Row, Col } from 'antd';
import type1 from '../assets/ayurvedaIcon.png';
import type2 from '../assets/waxIcon.png';
import type3 from '../assets/chemicalIcon.png';
import type4 from '../assets/oandmIcon.png';
import newRangeBG1 from '../assets/newRangeBG1.png';
import newRangeBG2 from '../assets/newRangeBG2.png';
import newRangeMain from '../assets/newRangeMain.png';

const categories = [
  { id: 1, icon: type1, label: 'Ayurvedic' },
  { id: 2, icon: type3, label: 'Chemical' },
  { id: 3, icon: type2, label: 'Wax Items' },
  { id: 4, icon: type4, label: 'Oil & Metals' },
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

      <div className='relative top-0 sm:-top-20 z-10'>
        <div className="flex justify-center items-center bg-[#ffffff] py-10 px-4 sm:px-6 lg:px-8 rounded-3xl max-w-[1100px] mx-auto">
          <Row
            className="w-full"
            gutter={[24, 24]}
            align="middle"
          >
            {/* Text + Categories */}
            <Col xs={24} md={12} className="flex flex-col justify-between">
              <div className="text-left mb-6">
                <h1 className="allheading">
                  Discover Our Range
                </h1>
                <p className="text-base sm:text-lg text-gray-700 font-[Karla,sans-serif]">
                  Experience unmatched quality with our top-rated service,
                  <br className="hidden sm:block" />
                  designed to exceed your expectations every time.
                </p>
              </div>

              <div className=" grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 mt-6 sm:mt-10">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                        <img src={item.icon} alt={item.label} className="w-[60px] h-[60px]" />
                        <span className="text-base sm:text-lg font-semibold underline headFont">{item.label}</span>
                  </div>
                ))}
              </div>
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
      </div>
    </div>
  );
};

export default ProductType;
