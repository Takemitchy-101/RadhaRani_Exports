import React from "react";
import { Row, Col, Card } from "antd";
import {
  BankOutlined,
  UserOutlined,
  AimOutlined,
} from "@ant-design/icons";

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
    <div className="px-4 md:px-12 py-10">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4 headFont">
          Legacy of Excellence Since 2012
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 subFont">
          Welcome to <strong>Radha Rani Exports</strong>, a trusted name in
          the wholesale and retail import-export business, established in May 2012 in
          Kolkata, West Bengal, India. Our company is proudly led by{" "}
          <strong>Mr. Natwar Kedia</strong>, whose vision and dedication have been
          instrumental in our growth and success.
        </p>
        <p className="text-gray-700 text-base md:text-lg subFont">
          As a sister concern of <strong>Basant Traders</strong>, a well-established
          company founded in the 1950s, we carry forward a legacy of excellence and
          reliability in the trade industry.
        </p>
      </div>

      <Row gutter={[16, 24]} justify="center">
        {highlights.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className={`w-full h-full text-center rounded-2xl border border-gray-300 p-4 shadow-md hover:shadow-lg transition-all duration-300 ${item.bg}`}
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex flex-col items-center justify-center space-y-3 py-6">
                <div className="text-3xl text-green-600">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-700 px-2">{item.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Story;
