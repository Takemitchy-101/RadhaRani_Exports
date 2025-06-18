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
      <div className="flex items-center justify-center mt-6">
        <img src={commonIcon} alt="icon" className="h-[60px] w-[60px] object-contain mr-5" />
        <img src={logo} alt="main logo" className="h-auto w-[170px] object-contain" />
      </div>

         {/* Embedded Map */}
       {/* <div className="px-4 pb-10 flex justify-center">
        <div className="w-full md:w-3/4 lg:full xl:full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Radha Rani Exports Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.148328685766!2d88.35869797496403!3d22.608133079465932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b4cf4b2b1f%3A0x76034c5d0a18c74!2sRadha%20Rani%20Exports!5e0!3m2!1sen!2sin!4v1718615600000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>    */}

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

      <Row justify="center" align="middle" className="">
        <Col>
          <img
            src={iol}
            alt="Indian Oil Logo"
            className="h-[60px] w-[60px] object-contain"
          />
        </Col>
        <Col>
          <h1 className="text-left font-semibold text-2xl headFont ml-4">
            Distributors of Indian Oil, Paraffin Wax and White Oil
          </h1>
        </Col>
      </Row>

      {/* Bottom Social Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-6 ">
        <span className="text-sm text-gray-300 text-center mr-10">
          © 2025 <a href="#" className="hover:underline headFont">Radharani Exports</a>. All Rights Reserved.
        </span>

        <div className="flex mt-4 md:mt-0 space-x-10">
          <a href="#" aria-label="Twitter"><XOutlined className="text-2xl hover:text-white cursor-pointer" /></a>
          <a href="#" aria-label="Instagram"><InstagramFilled className="text-2xl hover:text-white cursor-pointer" /></a>
          <a href="#" aria-label="Facebook"><FacebookFilled className="text-2xl hover:text-white cursor-pointer" /></a>
          <a href="#" aria-label="LinkedIn"><LinkedinFilled className="text-2xl hover:text-white cursor-pointer" /></a>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
