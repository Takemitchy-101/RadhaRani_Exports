import React from 'react';
import commonIcon from '../assets/commonIcon.png';
import newRangeBG3 from '../assets/newRangeBG3.png';
import newRangeBG4 from '../assets/newRangeBG4.png';
import pd1 from '../assets/product1.png';
import pd2 from '../assets/product2.png';
import pd3 from '../assets/product3.png';
import pd4 from '../assets/product4.png';
import { Row, Col, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const NewRange = () => {
  const productData = [
    { id: 1, Image: pd1, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
    { id: 2, Image: pd2, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★☆☆☆' },
    { id: 3, Image: pd3, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★☆☆' },
    { id: 4, Image: pd4, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★★' },
  ];

  return (
    <div className="relative bg-[#f3f8f3] pb-24 w-full overflow-hidden z-10">
      {/* Background Decorations */}
      <img
        src={newRangeBG3}
        alt="decor"
        className="absolute bottom-0 left-0 w-[85px] md:w-[150px] opacity-80 pointer-events-none z-0"
      />
      <img
        src={newRangeBG4}
        alt="decor"
        className="absolute bottom-0 right-0 w-[85px] md:w-[150px] opacity-80 pointer-events-none z-0"
      />

      {/* Title Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mt-12 md:mt-16 mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="custom-line" />
            <div className="h-16 w-16 mx-6 flex items-center justify-center">
              <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
            </div>
            <div className="custom-line" />
          </div>
          <h2 className="allheading">Our New Product</h2>
          <p className="alldes">
            Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
          </p>
        </div>

        {/* Products Grid */}
        <Row gutter={[32, 32]}>
          {productData.map((item) => (
            <Col
              key={item.id}
              xs={24}
              sm={12}
              md={12}
              lg={6}
              className="transition-transform transform hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
                <img
                  src={item.Image}
                  alt={item.pdname}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 headFont">{item.pdname}</h3>
                <p className="text-gray-500 mt-1 subFont">{item.price}</p>
                <p className="text-yellow-500 text-sm">{item.rating}</p>

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
  );
};

export default NewRange;
