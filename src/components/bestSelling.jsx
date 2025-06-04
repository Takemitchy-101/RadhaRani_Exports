import commonIcon from '../assets/commonIcon.png';
import bg1 from '../assets/bestSellBG1.png';
import bg2 from '../assets/bestSellBG2.png';
import pd1 from '../assets/product1.png';
import pd2 from '../assets/product2.png';
import pd3 from '../assets/product3.png';
import pd4 from '../assets/product4.png';
import { Row, Col, Button } from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons';

export const BestSelling = () => {
  const productData = [
    { id: 1, Image: pd1, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★★' },
    { id: 2, Image: pd2, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
    { id: 3, Image: pd3, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
    { id: 4, Image: pd4, pdname: ' Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★★' },
    { id: 5, Image: pd1, pdname: 'Amla', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
    { id: 6, Image: pd2, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
    { id: 7, Image: pd3, pdname: 'Senna Leaves', price: '₹60.00 - ₹70.00', rating: '★★★★★' },
    { id: 8, Image: pd4, pdname: 'Ashwagandha', price: '₹60.00 - ₹70.00', rating: '★★★★☆' },
  ];

  return (
    <div className="relative w-full bg-[#EEFFEE] py-8 md:py-5">
      <img
        src={bg1}
        alt="decor"
        className="absolute left-0 w-[130px] md:w-[200px] opacity-80 pointer-events-none z-0"
      />
      <img
        src={bg2}
        alt="decor"
        className="absolute right-0 bottom-0 w-[300px] opacity-80 pointer-events-none z-0"
      />

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

      <div className="px-4 max-w-[1280px] mx-auto z-10 relative">
        <Row gutter={[24, 24]}>
          {productData.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} className='transition-transform transform hover:scale-105'>
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">

                <img
                  src={item.Image}
                  alt={item.pdname}
                  className="w-full h-48 object-cover rounded-xl "
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-800 headFont">{item.pdname}</h3>
                <p className="text-gray-500 mt-1 subFont">{item.price}</p>
                <p className="text-yellow-500 text-sm headFont">{item.rating}</p>

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

export default BestSelling;
