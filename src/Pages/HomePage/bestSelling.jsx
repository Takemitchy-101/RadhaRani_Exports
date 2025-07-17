import React, { useState } from 'react';
import commonIcon from '../../assets/commonIcon.png';
import bg1 from '../../assets/bestSellBG1.png';
import bg2 from '../../assets/bestSellBG2.png';
import Flag from 'react-world-flags';
import { FaGlobeAsia } from 'react-icons/fa';
import { productData } from '../../components/dataModel';
import { Row, Col, Tooltip } from 'antd';

import catAyurvedic from '../../assets/ayurvedaIcon.png';
import catWax from '../../assets/waxIcon.png';
import catchemical from '../../assets/chemicalIcon.png';
import catMandO from '../../assets/oandmIcon.png';

const countryCodeMap = {
  IN: 'India',
  NP: 'Nepal',
  BD: 'Bangladesh',
  LK: 'Sri Lanka',
  BT: 'Bhutan',
};

const BestSelling = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ayurvedic');

  const categoryImages = {
    Ayurvedic: catAyurvedic,
    Wax: catWax,
    'Natural Chemcials': catchemical,
    'Metals And Oils': catMandO,
  };


  const filteredProducts = productData.filter(
    (item) => item.category === selectedCategory
  );

  const uniqueCountries = ['NP', 'BD', 'LK', 'BT'];

  return (
    <div className="relative w-full bg-[#EEFFEE] py-8 md:py-5">
      {/* Background decorations */}
      <img src={bg1} alt="decor" className="absolute left-0 w-[130px] md:w-[200px] opacity-80 pointer-events-none z-0" />
      <img src={bg2} alt="decor" className="absolute right-0 bottom-0 w-[300px] opacity-80 pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center mb-10 z-10 relative" id='categories'>
        <div className="flex items-center justify-center mb-4">
          <div className="custom-line" />
          <div className="h-16 w-16 mx-6 flex items-center justify-center">
            <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
          </div>
          <div className="custom-line" />
        </div>
        <h2 className="allheading">Best Selling</h2>
        <p className="alldes">
          Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
        </p>
      </div>

      {/* Category Selector */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 px-4 max-w-[1280px] mx-auto">
  {Object.entries(categoryImages).map(([category, image]) => {
    const isSelected = selectedCategory === category;
    return (
      <div
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`
          group cursor-pointer rounded-xl p-3 transition-all duration-300 ease-in-out 
          flex flex-col items-center justify-center
          ${
            isSelected
              ? 'bg-gradient-to-br from-green-100 via-white to-green-50 border-2 border-green-500 shadow-lg'
              : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-300 shadow-sm hover:shadow-md hover:border-green-400'
          }
        `}
      >
        <div
          className={`w-16 h-16 rounded-full bg-white flex items-center justify-center 
            shadow-md transition-transform duration-300 group-hover:scale-105
            ${isSelected ? 'ring-2 ring-green-300' : 'group-hover:shadow-lg'}
          `}
        >
          <img
            src={image}
            alt={category}
            className="w-12 h-12 object-contain transition-transform duration-300"
          />
        </div>
        <span
          className={`mt-2 text-sm font-semibold text-center transition-colors duration-300 
            ${isSelected ? 'text-green-700' : 'text-gray-700 group-hover:text-green-600'}
          `}
        >
          {category}
        </span>
      </div>
    );
  })}
</div>




      {/* Product Cards */}
      <div className="px-4 max-w-[1280px] mx-auto z-10 relative">
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar p-5">
          <Row gutter={[24, 24]}>
            {filteredProducts.map((item) => (
              <Col
                key={item.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                className="transition-transform transform hover:scale-105"
              >
                <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
                  <img
                    src={item.Image}
                    alt={item.pdname}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800 headFont">
                    {item.pdname}
                  </h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Export Section */}
      <div className="px-4 py-10">
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap text-center">
          <FaGlobeAsia className="text-green-500 text-3xl" />
          <h2 className="text-xl md:text-2xl font-bold text-green-700 head">
            Exporting Countries:
          </h2>
        </div>
        <div className="flex justify-center overflow-x-auto md:overflow-x-visible gap-4 flex-wrap px-4">
          {uniqueCountries.map((code, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-1 min-w-[80px] hover:scale-105 transition-transform duration-300"
            >
              <Tooltip title={countryCodeMap[code] || code}>
                <Flag code={code} className="w-8 h-6 rounded shadow-md" />
              </Tooltip>
              <span className="text-sm text-gray-700 font-medium text-center">
                {countryCodeMap[code] || code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
