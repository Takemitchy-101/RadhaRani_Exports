import React from 'react';
import bs1 from '../assets/bestService1.png';
import bs2 from '../assets/bestService2.png';
import bs3 from '../assets/bestService3.png';
import bs4 from '../assets/bestService4.png';
import bs5 from '../assets/bestService5.png';
import bs6 from '../assets/bestService6.png';
import commonIcon from '../assets/commonIcon.png';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph, Link } = Typography;


// Decorative assets
import leftbgBestSvc from '../assets/downrightbgBestSvc.png';
import downrightbgBestSvc from '../assets/leftbgBestSvc.png';

const BestServices = () => {
    const serviceData = [
        { id: 1, image: bs1, heading: 'Ayurvedic Medicine', des: 'Operates within regulations, ensuring safety and legal compliance' },
        { id: 2, image: bs2, heading: 'EcoDelivery', des: 'Operates within regulations, ensuring safety and legal compliance' },
        { id: 3, image: bs3, heading: '100 % Natural Edibles', des: 'Operates within regulations, ensuring safety and legal compliance' },
        { id: 4, image: bs4, heading: 'No Extracts used', des: 'Operates within regulations, ensuring safety and legal compliance' },
        { id: 5, image: bs5, heading: '100% Natural Herbs', des: 'Operates within regulations, ensuring safety and legal compliance, regulations' },
        { id: 6, image: bs6, heading: 'Safe & Legal', des: 'Operates within regulations, ensuring safety and legal compliance' },
    ];

    return (
        <div className="relative py-20 px-4 sm:px-10 md:px-20 bg-white overflow-hidden">

            <img
                src={downrightbgBestSvc}
                alt="decor"
                className="absolute top-0 left-0 w-[125px] md:w-[250px] opacity-80 pointer-events-none z-0"
            />
            <img
                src={leftbgBestSvc}
                alt="decor"
                className="absolute bottom-0 right-0 w-[100px] md:w-[120px] opacity-60 pointer-events-none z-0"
            />

            {/* Section Title */}
            <div className="text-center mb-16 relative z-10">
                <div className="flex items-center justify-center mb-4">
                    <div className="custom-line" />
                    <div className="h-16 w-16 mx-6 flex items-center justify-center">
                        <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
                    </div>
                    <div className="custom-line" />
                </div>
                <h2 className="allheading">Our Best Services</h2>
                <p className="alldes">
                    Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
                </p>
            </div>

            <Row gutter={[32, 32]} className="relative z-10">
                {serviceData?.map((item) => (
                    <Col xs={24} sm={12} md={12} lg={8}>
                        <div key={item.id} className="text-left border-1 border-gray-200 p-10 rounded-md shadow-sm cursor-pointer hover:scale-95 duration-100">
                            <div className=''>

                                <img src={item.image} alt={item.heading} className="w-30 h-30 object-contain flex-shrink-0" />

                                <div className="flex flex-col justify-center space-y-2">
                                    <h3 className="text-2xl font-semibold text-black my-3 headFont">{item.heading}</h3>
                                    <p className="text-sm text-gray-600 subFont">{item.des}</p>
                                    <a href="#" className="headFont !text-black !underline !underline-offset-4 !font-medium hover:!text-green-600">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>


        </div>
    );
};

export default BestServices;


// import React, { useState } from 'react';
// import { Row, Col, Typography, Card } from 'antd';
// import bs1 from '../assets/bestService1.png';
// import bs2 from '../assets/bestService2.png';
// import bs3 from '../assets/bestService3.png';
// import bs4 from '../assets/bestService4.png';
// import bs5 from '../assets/bestService5.png';
// import bs6 from '../assets/bestService6.png';
// import commonIcon from '../assets/commonIcon.png';
// import leftbgBestSvc from '../assets/downrightbgBestSvc.png';
// import downrightbgBestSvc from '../assets/leftbgBestSvc.png';

// const { Title, Paragraph } = Typography;

// const BestServices = () => {
//     const serviceData = [
//         { id: 1, image: bs1, heading: 'Ayurvedic Medicine', des: 'Operates within regulations, ensuring safety and legal compliance' },
//         { id: 2, image: bs2, heading: 'EcoDelivery', des: 'Operates within regulations, ensuring safety and legal compliance' },
//         { id: 3, image: bs3, heading: '100 % Natural Edibles', des: 'Operates within regulations, ensuring safety and legal compliance' },
//         { id: 4, image: bs4, heading: 'No Extracts used', des: 'Operates within regulations, ensuring safety and legal compliance' },
//         { id: 5, image: bs5, heading: '100% Natural Herbs', des: 'Operates within regulations, ensuring safety and legal compliance' },
//         { id: 6, image: bs6, heading: 'Safe & Legal', des: 'Operates within regulations, ensuring safety and legal compliance' },
//     ];

//     // Track hover states
//     const [hoveredCard, setHoveredCard] = useState(null);

//     return (
//         <div style={{
//             position: 'relative',
//             padding: '80px 20px',
//             background: '#fff',
//             overflow: 'hidden',
//         }}>
//             {/* Background Images */}
//             <img
//                 src={downrightbgBestSvc}
//                 alt="decor"
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: 180,
//                     opacity: 0.8,
//                     pointerEvents: 'none',
//                     zIndex: 0,
//                 }}
//             />
//             <img
//                 src={leftbgBestSvc}
//                 alt="decor"
//                 style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     right: 0,
//                     width: 140,
//                     opacity: 0.6,
//                     pointerEvents: 'none',
//                     zIndex: 0,
//                 }}
//             />

//             <div style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 1 }}>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
//                     <div style={{ height: 2, width: 50, backgroundColor: '#000' }} />
//                     <div style={{ height: 64, width: 64, margin: '0 20px' }}>
//                         <img src={commonIcon} alt="icon" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
//                     </div>
//                     <div style={{ height: 2, width: 50, backgroundColor: '#000' }} />
//                 </div>
//                 <Title level={2} style={{ fontWeight: 600, margin: 0 }}>Our Best Services</Title>
//                 <Paragraph style={{
//                     fontSize: 16,
//                     maxWidth: 700,
//                     margin: '16px auto 0',
//                     color: '#666'
//                 }}>
//                     Experience unmatched quality with our top-rated service, designed to exceed your expectations every time.
//                 </Paragraph>
//             </div>

//             {/* Service Grid */}
//             <Row gutter={[24, 24]} justify="center" style={{ position: 'relative', zIndex: 1 }}>
//                 {serviceData.map((item) => (
//                     <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={8}>
//                         <Card
//                             hoverable
//                             bordered
//                             style={{
//                                 borderRadius: 12,
//                                 padding: 20,
//                                 textAlign: 'left',
//                                 transition: 'transform 0.3s ease',
//                                 transform: hoveredCard === item.id ? 'scale(1.05)' : 'scale(1)',
//                                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                                 height: '100%',
//                             }}
//                             onMouseEnter={() => setHoveredCard(item.id)}
//                             onMouseLeave={() => setHoveredCard(null)}
//                             bodyStyle={{ padding: 0 }}
//                         >
//                             <div style={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 gap: 12
//                             }}>
//                                 <img src={item.image} alt={item.heading} style={{ height: 60, width: 60, objectFit: 'contain' }} />
//                                 <Title level={4} style={{ marginTop: 16, fontWeight: 600 }}>{item.heading}</Title>
//                                 <Paragraph style={{ color: '#666' }}>{item.des}</Paragraph>
//                                 <a href="#" style={{ color: '#000', textDecoration: 'underline' }}>Read More</a>
//                             </div>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// };

// export default BestServices;

