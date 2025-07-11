import React from 'react';
import commonIcon from '../../assets/commonIcon.png';
import bg1 from '../../assets/bestSellBG1.png';
import bg2 from '../../assets/bestSellBG2.png';
import pd1 from '../../assets/product1.png';
import pd2 from '../../assets/product2.png';
import pd3 from '../../assets/product3.jpg';
import pd4 from '../../assets/product4.png';
import pd5 from '../../assets/product5.png';
import pd6 from '../../assets/product6.png';
import pd7 from '../../assets/product7.png';
import pd8 from '../../assets/product8.png';
import pd9 from '../../assets/product9.png';
import pd10 from '../../assets/product10.png';
import pd11 from '../../assets/product11.png';
import { Row, Col, Tooltip } from 'antd';
import Flag from 'react-world-flags';
import { FaGlobeAsia } from 'react-icons/fa';

const countryCodeMap = {
  IN: 'India',
  NP: 'Nepal',
  BD: 'Bangladesh',
  LK: 'Sri Lanka',
  BT: 'Bhutan',
};

export const BestSelling = () => {
  const productData = [
    { id: 1, Image: pd1, pdname: 'Ashwagandha' },
    { id: 2, Image: pd2, pdname: 'Triphala' },
    { id: 3, Image: pd3, pdname: 'Multani Mitti' },
    { id: 4, Image: pd4, pdname: 'Chia Seeds' },
    { id: 5, Image: pd5, pdname: 'SandalWood' },
    { id: 6, Image: pd6, pdname: 'Isabgul Husk' },
    { id: 7, Image: pd7, pdname: 'Senna Leaves' },
    { id: 8, Image: pd8, pdname: 'Sugar Badam' },
    { id: 9, Image: pd9, pdname: 'Flax Seeds' },
    { id: 10, Image: pd10, pdname: 'Guggal' },
    { id: 11, Image: pd11, pdname: 'Amla Dry' },
    { id: 12, Image: pd4, pdname: 'Ashwagandha' },
  ];

  const uniqueCountries = ['IN', 'NP', 'BD', 'LK', 'BT'];

  return (
    <div className="relative w-full bg-[#EEFFEE] py-8 md:py-5">
      {/* Background Decorations */}
      <img src={bg1} alt="decor" className="absolute left-0 w-[130px] md:w-[200px] opacity-80 pointer-events-none z-0" />
      <img src={bg2} alt="decor" className="absolute right-0 bottom-0 w-[300px] opacity-80 pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center mb-16 z-10 relative">
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

      {/* Product Cards */}
      <div className="px-4 max-w-[1280px] mx-auto z-10 relative">
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar p-5">
          <Row gutter={[24, 24]}>
            {productData.map((item) => (
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

      {/* Exporting To Section */}
      <div className="px-4 py-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap text-center">
          <FaGlobeAsia className="text-green-500 text-3xl" />
          <h2 className="text-xl md:text-2xl font-bold text-green-700 head">
            Exporting Countries:
          </h2>
        </div>

        {/* Flags Scrollable Container */}
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
