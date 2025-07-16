import React from 'react';
import bs1 from '../../assets/bestService1.png';
import bs2 from '../../assets/bestService2.png';
import bs3 from '../../assets/bestService3.png';
import bs4 from '../../assets/bestService4.png';
import bs5 from '../../assets/bestService5.png';
import bs6 from '../../assets/bestService6.png';
import commonIcon from '../../assets/commonIcon.png';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph, Link } = Typography;


// Decorative assets
import leftbgBestSvc from '../../assets/downrightbgBestSvc.png';
import downrightbgBestSvc from '../../assets/leftbgBestSvc.png';

const BestServices = () => {
    const serviceData = [
        { id: 1, image: bs1, heading: 'Raw Ayurvedic Ingredients', des: 'Sourced directly from nature—our raw herbs and ingredients retain maximum potency for authentic Ayurvedic formulations..' },
        { id: 2, image: bs2, heading: 'Farm-to-Factory Purity', des: 'Direct sourcing from trusted farms ensures chemical-free, unprocessed herbs for complete traceability and purity.' },
        { id: 3, image: bs3, heading: 'Manufacturer Supply Chain', des: 'We specialize in supplying high-quality Ayurvedic raw materials in bulk—ideal for wellness brands, pharmacies, and processors.' },
        { id: 4, image: bs4, heading: ' Heritage Crop Techniques', des: 'Our herbs are handpicked using ancient Vedic practices to preserve their natural healing essence.' },
        { id: 5, image: bs5, heading: '100% Natural Herbs', des: 'Pure, chemical-free herbs sourced from nature to support holistic wellness and traditional healing.' },
        { id: 6, image: bs6, heading: 'Custom Sourcing Solutions', des: 'Custom herb sourcing available for personalized Ayurvedic and holistic health solutions.' },
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
                <h2 className="allheading">Trusted Ayurveda, Rooted in Nature</h2>
                <p className="alldes">
                    Supplying premium, lab-tested Ayurvedic herbs and ingredients—trusted by health brands, practitioners, and manufacturers worldwide.
                </p>
            </div>

            <Row gutter={[32, 32]} className="relative z-10">
                {serviceData?.map((item) => (
                    <Col xs={24} sm={12} md={12} lg={8}>
                        <div key={item.id} className="text-left border-1 border-gray-200 p-10 rounded-md shadow-sm cursor-pointer hover:scale-95 duration-100">
                            <div className=''>

                                <img src={item.image} alt={item.heading} className="w-35 h-35 object-contain flex-shrink-0" />

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


