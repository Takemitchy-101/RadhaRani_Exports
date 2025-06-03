import React from 'react';
import mainIg from '../assets/keyAdMain.png'; // left side image
import logo1 from '../assets/keyAdlogo1.png'; // award icon
import logo2 from '../assets/keyAdlogo2.png'; // leaf icon
import logo3 from '../assets/keyAdlogo3.png'; // bowl icon
import { Row, Col, Button } from 'antd';

export const KeyAdvantages = () => {
    const keyAdData = [
        {
            id: 1,
            image: logo1,
            heading: "EXPERIENCE COMPANY",
            des: "Pioneering innovation through bold experimentation and cutting-edge technology. Turning visionary ideas into real-world.",
        },
        {
            id: 2,
            image: logo2,
            heading: "Quality Products",
            des: "Pioneering innovation through bold experimentation and cutting-edge technology. Turning visionary ideas into real-world.",
        },
        {
            id: 3,
            image: logo3,
            heading: "Product Manufacturing",
            des: "Pioneering innovation through bold experimentation and cutting-edge technology. Turning visionary ideas into real-world.",
        },
    ];

    return (
        <div className="w-full bg-[#73BE73] rounded-3xl overflow-hidden">
            <Row gutter={[24, 24]} align="middle">
                {/* Left Image */}
                <Col xs={24} md={10}>
                    <img
                        src={mainIg}
                        alt="Main"
                        className="w-full h-full object-cover"
                    />
                </Col>

                {/* Right Content */}
                <Col xs={24} md={14}>
                    <div className="p-6 md:p-10 space-y-10">
                        {keyAdData.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-start gap-6 transition-transform hover:scale-105"
                            >
                                {/* Icon */}
                                <img
                                    src={item.image}
                                    alt={item.heading}
                                    className="w-[60px] h-[60px] mt-1"
                                />

                                {/* Text Content */}
                                <div className='te'>
                                    <h3 className="text-white font-bold text-lg uppercase mb-2 headFont">
                                        {item.heading}
                                    </h3>
                                    <p className="text-white text-md mb-4 leading-relaxed subFont">
                                        {item.des}
                                    </p>
                                    <Button
                                        type="default"
                                        size="small"
                                        className="!bg-white headFont !text-black !font-semibold !border-none !rounded-full !px-4 hover:!bg-green-800 hover:!text-white transition-transform transform hover:scale-105"
                                    >
                                        Read More
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default KeyAdvantages;
