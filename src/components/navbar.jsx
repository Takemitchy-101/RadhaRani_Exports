import React, { useState } from 'react';
import logo from '../assets/mainLogo.png'
import { Row, Col, Menu, Dropdown, Drawer, Button } from 'antd';
import {
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  XOutlined,
} from '@ant-design/icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import iol from '../assets/indianOilLogo.png';

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const shopMenu = (
    <Menu>
      <Menu.Item key="1" className='dropdownMenu'>All Products</Menu.Item>
      <Menu.Item key="2" className='dropdownMenu'>Categories</Menu.Item>
    </Menu>
  );

  const pagesMenu = (
    <Menu>
      <Menu.Item key="1" className='dropdownMenu'>FAQ</Menu.Item>
      <Menu.Item key="2" className='dropdownMenu'>Gallery</Menu.Item>
    </Menu>
  );

  const currencyMenu = (
    <Menu>
      <Menu.Item className='dropdownMenu'>INR</Menu.Item>
      <Menu.Item className='dropdownMenu'>USD</Menu.Item>
      <Menu.Item className='dropdownMenu'>EUR</Menu.Item>
    </Menu>
  );

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <nav className={` text-white w-full shadow ${isHome ? "bg-transparent" : "bg-gradient-to-br from-emerald-700 to-emerald-700 !sticky"
      }`}>
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
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="flex space-x-4">
          </div>
          <Button type="text" icon={<MenuOutlined className="!text-white !text-2xl hover:text-green-300 cursor-pointer" />} onClick={toggleDrawer} />
        </div>

        {/* Social Icons */}
        {/* <XOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaFacebookF className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaInstagram className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaLinkedinIn className="hover:text-green-300 cursor-pointer text-2xl" /> */}
        <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-green-250 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <img
            src={iol}
            alt="Indian Oil Logo"
            className="h-[50px] w-[50px] object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-white text-sm font-semibold leading-snug">
            <div className="group-hover:text-green-200 transition-colors duration-300">Leading Distributor</div>
            <div className="group-hover:text-green-200 transition-colors duration-300">of Wax & Oil Solutions</div>
          </div>
        </div>
      </div>

      <Row gutter={24} justify="center" align="middle" className="px-6 py-3">

        <Col className="hidden md:flex items-center space-x-15 subFont">
          <Link to="/" className='!text-white hover:text-green-300 text-lg'>Home</Link>
         
         <a href="#categories" className="!text-white hover:text-green-300 text-lg">Categories</a>
         <a href="#our-story" className="!text-white hover:text-green-300 text-lg">About</a>
         <a href="#gallery" className="!text-white hover:text-green-300 text-lg">Gallery</a>
          {/* <Dropdown overlay={pagesMenu} arrow>
            <a href="#" onClick={(e) => e.preventDefault()} className="!text-white hover:text-green-300 text-lg">
              Pages <DownOutlined />
            </a>
          </Dropdown> */}
          <a href="#contactUS" className="!text-white hover:text-green-300 text-lg">Contact</a>
        </Col>

        {/* Right Icons (Desktop) */}
        {/* <Col className="hidden md:flex justify-end items-center space-x-7 ml-5 ">
          <UserOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <div className="w-[2px] h-7 bg-gray-400" />
          <ShoppingCartOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <Dropdown overlay={currencyMenu}>
            <a className="hover:text-green-300 !text-white text-lg">INR <DownOutlined /></a>
          </Dropdown>
        </Col> */}
      </Row>


      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={toggleDrawer}
        visible={drawerVisible}
        closeIcon={<CloseOutlined />}

      >
        <div className="flex flex-col space-y-4 subFont">
          <a href="#" className='subFont !text-black '>Home</a>
          <Dropdown overlay={shopMenu}><a href="#" className='subFont !text-black'>Shop <DownOutlined /></a></Dropdown>
          <a href="#our-story" className='subFont !text-black'>About</a>
          <Dropdown overlay={pagesMenu}><a href="#" className='subFont !text-black'>Pages <DownOutlined /></a></Dropdown>
          <a href="#" className='subFont !text-black'>Contact</a>
          <hr />
          <Dropdown overlay={currencyMenu}>
            <a className='subFont !text-black'>INR  <DownOutlined /></a>
          </Dropdown>
          <div className="flex space-x-3 mt-4">
            <XOutlined />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;



