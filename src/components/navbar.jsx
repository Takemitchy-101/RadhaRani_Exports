import React, { useState } from 'react';
import logo from '../assets/mainLogo.png';
import { Row, Col, Drawer, Button } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import iol from '../assets/indianOilLogo.png';

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const toggleDrawer = () => {
    setDrawerVisible((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav
      className={`text-white w-full shadow ${
        isHome
          ? 'bg-transparent'
          : 'bg-gradient-to-br from-emerald-700 to-emerald-700 !sticky'
      }`}
    >
      {/* Top Row: Logo + Social */}
      <div className="flex justify-between items-center px-3 border-b border-white/25">
        {/* Logo */}
        <div className="flex items-center ml-5">
          <img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-16 md:h-20 object-contain"
          />
        </div>

        {/* Hamburger menu (Mobile) */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div />
          <Button
            type="text"
            icon={
              <MenuOutlined className="!text-white !text-2xl hover:text-green-300 cursor-pointer" />
            }
            onClick={toggleDrawer}
          />
        </div>

        {/* Indian Oil Logo and Info (Desktop) */}
        <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-green-250 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <img
            src={iol}
            alt="Indian Oil Logo"
            className="h-[50px] w-[50px] object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-white text-sm font-semibold leading-snug">
            <div className="group-hover:text-green-200 transition-colors duration-300">
              Leading Distributor
            </div>
            <div className="group-hover:text-green-200 transition-colors duration-300">
              of Wax & Oil Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu (Desktop) */}
      <Row gutter={24} justify="center" align="middle" className="px-6 py-3">
        <Col className="hidden md:flex items-center space-x-15 subFont">
          <Link to="/" className="!text-white hover:text-green-300 text-lg">
            Home
          </Link>
          <a
            href="#categories"
            className="!text-white hover:text-green-300 text-lg"
          >
            Categories
          </a>
          <a
            href="#our-story"
            className="!text-white hover:text-green-300 text-lg"
          >
            About
          </a>
          <a
            href="#gallery"
            className="!text-white hover:text-green-300 text-lg"
          >
            Gallery
          </a>
          <a
            href="#contactUS"
            className="!text-white hover:text-green-300 text-lg"
          >
            Contact
          </a>
        </Col>
      </Row>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        open={drawerVisible}
        onClose={closeDrawer}
        closeIcon={<CloseOutlined />}
      >
        <div className="flex flex-col space-y-4 subFont text-black text-lg">
          <Link to="/" onClick={closeDrawer}>
            Home
          </Link>
          <a href="#categories"  className='subFont !text-black' onClick={closeDrawer}>
            Categories
          </a>
          <a href="#our-story"  className='subFont !text-black' onClick={closeDrawer}>
            About
          </a>
          <a href="#gallery"  className='subFont !text-black' onClick={closeDrawer}>
            Gallery
          </a>
          <a href="#contactUS"  className='subFont !text-black' onClick={closeDrawer}>
            Contact
          </a>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
