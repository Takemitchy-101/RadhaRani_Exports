import React from "react";
import { Row, Col, Card, Tooltip } from "antd";
import {
    BankOutlined,
    UserOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { FaLeaf, FaGlobe, FaCalendarAlt } from "react-icons/fa";



export const Story = () => {

    const highlights = [
        {
            icon: <BankOutlined style={{ fontSize: 24 }} />,
            title: "Heritage",
            description: "Sister concern of Basant Traders (1950s)",
            bg: "bg-orange-50",
        },
        {
            icon: <UserOutlined style={{ fontSize: 24 }} />,
            title: "Leadership",
            description: "Led by Mr. Natwar Kedia",
            bg: "bg-green-50",
        },
        {
            icon: <AimOutlined style={{ fontSize: 24 }} />,
            title: "Mission",
            description: "One-stop buying point for Ayurvedic companies",
            bg: "bg-blue-50",
        },
    ];


    return (
        <div>
            <div className="mb-6 ml-10">
                <div className="text-green-500 font-semibold uppercase mb-1 text-xl">
                    Our Story
                </div>
                <h2 className="text-3xl md:text-4xl headFont font-bold text-gray-900 leading-snug mb-4">
                    Legacy of Excellence Since 2012
                </h2>
                <p className="text-gray-700 subFont text-base leading-relaxed mb-4">
                    Welcome to <strong>Radha Rani Exports</strong>, a trusted name in
                    the wholesale and retail import-export business, established in
                    May 2012 in Kolkata, West Bengal, India. Our company is proudly
                    led by <strong>Mr. Natwar Kedia</strong>, whose vision and
                    dedication have been instrumental in our growth and success.
                </p>
                <p className="text-gray-700 subFont text-base">
                    As a sister concern of <strong>Basant Traders</strong>, a
                    well-established company founded in the 1950s, we carry forward a
                    legacy of excellence and reliability in the trade industry.
                </p>
            </div>

            <Row gutter={[16, 16]} justify="center">
                {highlights.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={index} className="flex justify-center">
                        <Card
                            className="w-40 max-w-xs h-[200px] text-center rounded-2xl border-1 border-black shadow-none p-4 !bg-green-50 "
                            bodyStyle={{ padding: 10 }}
                        >
                            <div className="flex flex-col items-center justify-center h-full space-y-2">
                                <div className="text-3xl">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>

    )

}

export default Story;