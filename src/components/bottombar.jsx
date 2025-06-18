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
import iol from '../assets/indianOilLogo.png';
import Flag from 'react-world-flags';
import { SiGooglemaps } from "react-icons/si";

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
      links: [
        { name: 'Sri Lanka', code: 'LK' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Bhutan', code: 'BT' },
        { name: 'Bangladesh', code: 'BD' },
      ],
    },
    {
      title: (
        <span className="flex items-center justify-center gap-2">
          <SiGooglemaps className="text-xl text-white" /> Address
        </span>
      ),
      content: `Radha Rani Exports,\nD-1 Strand Bank Road,\nJagannath Ghat Cross Road,\nNaffis Patti (Hari Ram Market),\nPin 700007`,
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

      {/* Logo Section */}
      <div className="flex items-center justify-center ">
        <img src={commonIcon} alt="icon" className="h-[60px] w-[60px] object-contain mr-5 mt-5" />
        <img src={logo} alt="main logo" className="h-auto w-[170px] object-contain mt-5" />
      </div>

      {/* Embedded Map */}

      {/* Footer Sections */}
      <div className="px-4 py-10">
        <Row gutter={[16, 24]} justify="center">
          {footerSections.map((section, index) => (
            <Col
              key={index}
              xs={24}
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
                  {section.title === 'Exporting Countries' ? (
                    section.links.map((link) => (
                      <li key={link.name} className="flex items-center gap-2 justify-center items">
                        <Flag code={link.code} style={{ width: 20, height: 15, }} />
                        <a href="#" className="hover:underline !text-white">
                          {link.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="hover:underline !text-white">
                          {link}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              ) : (
                <p className="whitespace-pre-line text-gray-300 subFont">{section.content}</p>
              )}
            </Col>
          ))}
        </Row>
      </div>

      <div className="flex flex-col items-center text-center sm:flex-row sm:justify-center sm:text-left">
        <img
          src={iol}
          alt="Indian Oil Logo"
          className="h-[50px] w-[50px] object-contain mb-2 sm:mb-0"
        />
        <h1 className="text-2xl font-semibold headFont sm:ml-4">
          Distributors of Indian Oil, Paraffin Wax and White Oil
        </h1>
      </div>


      {/* Bottom Social Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-6 text-center md:text-left">
        <span className="text-sm text-gray-300 mb-4 md:mb-0">
          © 2025 <a href="#" className="hover:underline headFont">Radharani Exports</a>. All Rights Reserved.
        </span>

        <div className="flex space-x-8 md:ml-8">
          <a href="#" aria-label="Twitter">
            <XOutlined className="text-2xl hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramFilled className="text-2xl hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="Facebook">
            <FacebookFilled className="text-2xl hover:text-white cursor-pointer" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedinFilled className="text-2xl hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default BottomBar;
