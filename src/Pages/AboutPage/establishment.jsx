import React from "react";
import { Row, Col, Card, Tooltip } from "antd";
import img1 from '../../assets/aboutimg1.jpg';
import img2 from '../../assets/aboutimg2.jpg';
import img3 from '../../assets/aboutimg3.jpg';
import img4 from '../../assets/aboutimg4.jpg';
import commonIcon from '../../assets/commonIcon.png';
import Story from "./story";

export const Establishment = () => {
    return (
        <div>
            <div className="text-center mt-10 z-10 relative">
                <div className="flex items-center justify-center mb-">
                    <div className="custom-line" />
                    <div className="h-16 w-16 mx-6 flex items-center justify-center">
                        <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
                    </div>
                    <div className="custom-line" />
                </div>
                <h2 className="allheading">Our Story</h2>
                <p className="alldes">
                   Rooted in ancient Ayurveda, our journey brings natural healing, holistic wellness, and timeless herbal traditions alive.
                </p>
            </div>
            <div className="py-12 px-6 md:px-16 bg-white mt-10">
                <Row gutter={[24, 24]}>
                    {/* Left Section - Images and Badge */}
                    <Col xs={24} md={13}>
                        <Row gutter={[16, 16]}>
                            {/* First Row */}
                            <Col xs={24} sm={12}>
                                <img
                                    src={img1}
                                    alt="Nature"
                                    className="rounded-xl shadow-md w-full h-[280px] object-cover"
                                />
                            </Col>
                            <Col xs={24} sm={12} className="sm:mt-18">
                                <img
                                    src={img2}
                                    alt="Tree"
                                    className="rounded-xl shadow-md w-full h-auto object-cover"
                                />
                            </Col>

                            <Col xs={24} sm={12} className="sm:mt-2">
                                <img
                                    src={img3}
                                    alt="Cake"
                                    className="rounded-xl shadow-md w-full h-auto object-cover"
                                />
                            </Col>
                            <Col xs={24} sm={12} className=" relative">
                                <img
                                    src={img4}
                                    alt="Forest"
                                    className="rounded-xl shadow-md w-full h-[250px] object-cover"
                                />
                                <div className="absolute -bottom-5 right-5 bg-white rounded-xl shadow-lg px-5 py-3 text-center">
                                    <div className="text-xl font-bold text-green-700">12+</div>
                                    <div className="text-sm text-gray-500">Years of Excellence</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    {/* Right Section - Text and Highlights */}
                    <Col xs={24} md={11}>
                        <Story />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Establishment;