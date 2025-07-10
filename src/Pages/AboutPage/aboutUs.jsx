import React from "react";
import { Row, Col, Card, Tooltip } from "antd";
import {
    BankOutlined,
    UserOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { FaLeaf, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import img1 from '../../assets/aboutimg1.jpeg';
import img2 from '../../assets/aboutimg2.jpeg';
import img3 from '../../assets/aboutimg3.jpeg';
import img4 from '../../assets/aboutimg4.jpeg';
import Story from "./story";
import ProductType from "./productType";
import Mission from "./mission";
import GlobalExpansion from "./globalExpansion";

export const AboutUs = () => {

    return (
        <div>
            <section className="relative bg-gradient-to-br from-amber-50 via-white to-green-100 py-16 px-4 text-center overflow-hidden">
                {/* Radial background effect */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-orange-100 via-transparent to-transparent opacity-30 rounded-full z-0" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 flex items-center justify-center bg-white shadow-lg rounded-full mb-6">
                        <FaLeaf className="text-green-500 text-2xl" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        About <span className="text-green-500">Radha Rani Exports</span>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 sunFOnt text-gray-600 text-lg">
                        A trusted name in wholesale and retail import-export business, specializing in Ayurvedic herbs, spices, and petroleum by-products since 2012.
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 text-green-600 font-medium">
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span>Established 2012</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGlobe />
                            <span>Global Export</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ////////////////// */}

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
                                    className="rounded-xl shadow-md w-full h-auto object-cover"
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
                                    className="rounded-xl shadow-md w-full h-auto object-cover"
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
                       <Story/>
                    </Col>
                </Row>
            </div>

            <div><ProductType/></div>
            <div><Mission/></div>
            <div><GlobalExpansion/></div>



        </div>
    )
}

export default AboutUs;