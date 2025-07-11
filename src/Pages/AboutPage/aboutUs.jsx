import React from "react";
import { Row, Col, Card, Tooltip } from "antd";
import {
    BankOutlined,
    UserOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { FaLeaf, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import ProductType from "./productType";
import Mission from "./mission";
import GlobalExpansion from "./globalExpansion";
import Establishment from "./establishment";

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

            {/* <div><Establishment/></div> */}
            <div><ProductType/></div>
            <div><Mission/></div>
            <div><GlobalExpansion/></div>



        </div>
    )
}

export default AboutUs;