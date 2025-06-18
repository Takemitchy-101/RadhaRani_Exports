import React from 'react';
import commonIcon from '../assets/commonIcon.png';
import bg1 from '../assets/bestSellBG1.png';
import bg2 from '../assets/bestSellBG2.png';
import pd1 from '../assets/product1.png';
import pd2 from '../assets/product2.png';
import pd3 from '../assets/product3.png';
import pd4 from '../assets/product4.png';
import { Row, Col, Button, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Flag from 'react-world-flags';

export const BestSelling = () => {
  const productData = [
    { id: 1, Image: pd1, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★★', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
    { id: 2, Image: pd2, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'NP', 'BD'] },
    { id: 3, Image: pd3, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'LK', 'BT'] },
    { id: 4, Image: pd4, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★★', countries: ['IN', 'BT'] },
    { id: 5, Image: pd1, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'BD', 'LK', 'BT'] },
    { id: 6, Image: pd2, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'NP', 'BT'] },
    { id: 7, Image: pd3, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★★', countries: ['IN', 'NP', 'LK', 'BT'] },
    { id: 8, Image: pd4, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
    { id: 9, Image: pd1, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★★', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
    { id: 10, Image: pd2, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
    { id: 11, Image: pd3, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
    { id: 12, Image: pd4, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★★', countries: ['IN', 'NP', 'BD', 'LK', 'BT'] },
  ];

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
              <Col key={item.id} xs={24} sm={12} md={8} lg={6} className="transition-transform transform hover:scale-105">
                <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
                  <img src={item.Image} alt={item.pdname} className="w-full h-48 object-cover rounded-xl" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800 headFont">{item.pdname}</h3>
                  <p className="text-gray-500 mt-1 subFont">{item.price}</p>
                  <p className="text-yellow-500 text-sm headFont">{item.rating}</p>

                  {/* Country Flags */}
                  <div className="flex flex-wrap gap-2 mt-2 justify-center">
                    {item.countries.slice(0, 2).map((code, idx) => (
                      <Flag
                        key={idx}
                        code={code}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 2,
                          boxShadow: '0 0 2px rgba(0,0,0,0.3)',
                        }}
                        title={code}
                      />
                    ))}
                    {item.countries.length > 2 && (
                      <Tooltip
                        className='!bg-white'
                        title={
                          <div className="flex gap-1">
                            {item.countries.slice(2).map((code, idx) => (
                              <Flag
                                key={idx}
                                code={code}
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: 2,
                                  boxShadow: '0 0 2px rgba(0,0,0,0.3)',
                                }}
                                title={code}
                              />
                            ))}
                          </div>
                        }
                        overlayInnerStyle={{
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          padding: '8px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        }}
                      >
                        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700 font-semibold cursor-pointer">
                          +{item.countries.length - 2}
                        </span>
                      </Tooltip>
                    )}

                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    type="default"
                    icon={<ShoppingCartOutlined />}
                    className="mt-4 w-full headFont !font-semibold !border-green-500 !text-green-600 hover:!text-white hover:!bg-green-700 hover:!border-green-600 !rounded-lg !shadow-md !transition !duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
