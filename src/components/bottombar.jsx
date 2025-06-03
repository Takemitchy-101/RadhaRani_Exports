import React from 'react';
import { Row, Col } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  XOutlined,
} from '@ant-design/icons';
import Bg from '../assets/BottomBarBg.png';
import commonIcon from '../assets/needLogo.png';
import logo from '../assets/mainLogo.png';

export const BottomBar = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Brand Center', 'Blog'],
    },
    {
      title: 'Help Center',
      links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'],
    },
    {
      title: 'Exporting Countries',
      links: ['Sri-Lanka', 'Nepal', 'Butan', 'Bangladesh'],
    },
    {
      title: 'Address',
      content: `Radha Rani Exports,D-1 Strand Bank Road,\nJagannath Ghat Cross Road,\nNaffis Patti (Hari Ram Market),\nPin 700007`,
    },
    {
      title: 'Contact Us',
      content: `radharani.90100@yahoo.com\nInfo@radharaniexports.com\n9073660100 / 6292020562\n9830541025 / 9331190100\n033-22581317 / 2033`,
    },
  ];

  return (
    <footer className="relative w-full text-white">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Logo */}
      <div className="flex items-center justify-center mt-6">
        <img src={commonIcon} alt="icon" className="h-[60px] w-[60px] object-contain mr-5" />
        <img src={logo} alt="main logo" className="h-[150px] w-[170px] object-contain" />
      </div>

      <h1 className="text-center font-bold text-2xl -mt-5 mb-10 ml-7 headFont">
        Distributors of Indian Oil Paraffin wax and White oil
      </h1>

      {/* Footer Sections using AntD Grid */}
      <div className="px-4 py-6">
        <Row gutter={[16, 24]} justify="center">
          {footerSections.map((section, index) => (
            <Col
              key={index}
              xs={12}  // 2 columns on mobile
              sm={12}
              md={6}
              lg={5}
              xl={4}
              className="text-center flex flex-col items-center"
            >
              <h2 className="mb-4 text-sm font-semibold text-white uppercase headFont">
                {section.title}
              </h2>
              {section.links ? (
                <ul className="text-gray-300 space-y-3 subFont">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:underline !text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="whitespace-pre-line text-gray-300 subFont">{section.content}</p>
              )}
            </Col>
          ))}
        </Row>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-6">
        <span className="text-sm text-gray-300 text-center mr-10">
          © 2025 <a href="#" className="hover:underline headFont">Radharani Exports</a>. All Rights Reserved.
        </span>

        <div className="flex mt-4 md:mt-0 space-x-10">
          <XOutlined className="text-2xl hover:text-white cursor-pointer" />
          <InstagramFilled className="text-2xl hover:text-white cursor-pointer" />
          <FacebookFilled className="text-2xl hover:text-white cursor-pointer" />
          <LinkedinFilled className="text-2xl hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
