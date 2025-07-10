import React from 'react';
import emailSub from '../../assets/emailSub.png';
import { Row, Col, Input, Button } from 'antd';

export const Emailsub = () => {
  return (
    <div
      className="min-h-[260px] w-full bg-cover bg-center flex items-center py-6 px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${emailSub})`,
      }}
    >
      <Row gutter={[16, 16]} className="w-full">
        <Col xs={24} md={12}>
          <div className="text-left">
            <h1 className="text-xl sm:text-2xl text-white subFont">
              Curious About Our Wellness Deals?
            </h1>
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white headFont">
              Subscribe Here!
            </h1>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="bg-white p-3 sm:p-4 md:p-2 rounded-xl md:rounded-full flex flex-col sm:flex-row sm:items-center shadow-md w-full md:max-w-xl mx-auto gap-2">
            <Input
              type="email"
              aria-label="Email address"
              placeholder="Your Email Address"
              bordered={false}
              className="rounded-full w-full sm:flex-1 !text-md focus:!bg-[#f0f0f0]"
              style={{
                outline: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
              }}
            />
            {/* Responsive alignment for button */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <Button
                type="submit"
                className="headFont !bg-green-600 hover:!bg-green-700 !text-white !rounded-full px-5 w-[150px] sm:w-auto min-h-[40px] text-lg hover:scale-110"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Col>




      </Row>
    </div>
  );
};

export default Emailsub;
