// import React, { useState } from 'react'
// import { Row, Col, Dropdown, Menu, Drawer, Button } from 'antd';
// import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
// import logo from '../assets/mainLogo.png'
// import {
//   XOutlined,
//   InstagramFilled,
//   FacebookFilled,
//   LinkedinFilled,
//   DownOutlined,
//   ShoppingCartOutlined,
// } from '@ant-design/icons';

// export const NavBar = () => {
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   const categoryMenu = (
//     <Menu className="bg-white border-none shadow-lg">
//       <Menu.Item key="1" className="hover:!bg-green-600 hover:!text-white">Ayurvedic</Menu.Item>
//       <Menu.Item key="2" className="hover:!bg-green-600 hover:!text-white">Wax</Menu.Item>
//       <Menu.Item key="3" className="hover:!bg-green-600 hover:!text-white">Chemicals</Menu.Item>
//       <Menu.Item key="4" className="hover:!bg-green-600 hover:!text-white">Oils</Menu.Item>
//       <Menu.Item key="5" className="hover:!bg-green-600 hover:!text-white">Metals</Menu.Item>
//     </Menu>
//   );

//   const mobileMenu = (
//     <div className="flex flex-col gap-4 p-4 text-black">
//       <span className="cursor-pointer">Home</span>
//       <span className="cursor-pointer">Shop</span>
//       <span className="cursor-pointer">About</span>
//       <Dropdown overlay={categoryMenu} trigger={['click']}>
//         <span className="cursor-pointer flex items-center gap-x-1">
//           Categories <DownOutlined />
//         </span>
//       </Dropdown>
//       <span className="cursor-pointer">Contact</span>
//     </div>
//   );

//   return (
//     <div className='text-white text-center'>
//       <Row gutter={24} align="middle" className='h-[70px]'>
//         <Col span={12}>
//           <img src={logo} alt="main-logo" className='w-[130px] h-[65px] ml-4 md:ml-20' />
//         </Col>

//         <Col span={12}>
//           {/* Desktop Icons */}
//           <div className='hidden md:flex items-center justify-end gap-x-6 h-full mr-4 md:mr-18'>
//             <XOutlined className='text-2xl cursor-pointer' />
//             <InstagramFilled className='text-2xl cursor-pointer' />
//             <FacebookFilled className='text-2xl cursor-pointer' />
//             <LinkedinFilled className='text-2xl cursor-pointer' />
//           </div>

//           {/* Mobile Hamburger Icon */}
//           <div className='flex md:hidden justify-end pr-4'>
//             <AiOutlineMenu className='text-3xl cursor-pointer' onClick={() => setDrawerVisible(true)} />
//           </div>
//         </Col>
//       </Row>

//       {/* Divider */}
//       <div className="w-full h-[2px] bg-gray-400" />

//       {/* Navigation Links */}
//       <Row gutter={24} className='hidden md:flex'>
//         <Col span={16}>
//           <div className="flex items-center justify-center gap-x-10 flex-wrap py-2">
//             <span className="text-lg cursor-pointer">Home</span>
//             <span className="text-lg cursor-pointer">Shop</span>
//             <span className="text-lg cursor-pointer">About</span>
//             <Dropdown overlay={categoryMenu} trigger={['hover']}>
//               <span className="text-lg cursor-pointer flex items-center gap-x-1">
//                 Categories <DownOutlined />
//               </span>
//             </Dropdown>
//             <span className="text-lg cursor-pointer">Contact</span>
//           </div>
//         </Col>
//         <Col span={8}>
//           <div className="flex items-center justify-center gap-x-5 flex-wrap py-2">
//             <AiOutlineUser className='text-2xl cursor-pointer' />
//             <div className="w-[2px] h-10 bg-gray-400" />
//             <ShoppingCartOutlined className='text-2xl cursor-pointer' />
//           </div>
//         </Col>
//       </Row>

//       {/* Drawer for mobile */}
//       <Drawer
//         title={<img src={logo} alt="logo" className='w-[100px]' />}
//         placement="right"
//         onClose={() => setDrawerVisible(false)}
//         open={drawerVisible}
//         closable
//       >
//         {mobileMenu}
//         <div className="flex justify-start items-center gap-x-4 mt-6">
//           <AiOutlineUser className='text-2xl cursor-pointer' />
//           <ShoppingCartOutlined className='text-2xl cursor-pointer' />
//         </div>
//         <div className="flex justify-start items-center gap-x-4 mt-4">
//           <InstagramFilled className='text-xl cursor-pointer' />
//           <FacebookFilled className='text-xl cursor-pointer' />
//           <LinkedinFilled className='text-xl cursor-pointer' />
//         </div>
//       </Drawer>
//     </div>
//   )
// }

// export default NavBar;

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

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

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
    <nav className=" text-white w-full shadow">
      {/* Top Row: Logo + Social */}
      <div className="flex justify-between items-center px-3 border-b border-white/20">
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
        <div className="hidden md:flex space-x-15 items-center md:mr-15 ">
          <XOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaFacebookF className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaInstagram className="hover:text-green-300 cursor-pointer text-2xl" />
          <FaLinkedinIn className="hover:text-green-300 cursor-pointer text-2xl" />
        </div>
      </div>

      <Row gutter={24} justify="center" align="middle" className="px-6 py-3">

        <Col className="hidden md:flex items-center space-x-10 subFont">
          <a href="#" className="!text-white hover:text-green-300 text-lg">Home</a>
          <Dropdown overlay={shopMenu} arrow>
            <a href="#" onClick={(e) => e.preventDefault()} className="!text-white hover:text-green-300 text-lg">
              Shop <DownOutlined />
            </a>
          </Dropdown>
          <a href="#" className="!text-white hover:text-green-300 text-lg">About</a>
          <Dropdown overlay={pagesMenu} arrow>
            <a href="#" onClick={(e) => e.preventDefault()} className="!text-white hover:text-green-300 text-lg">
              Pages <DownOutlined />
            </a>
          </Dropdown>
          <a href="#" className="!text-white hover:text-green-300 text-lg">Contact</a>
        </Col>

        {/* Right Icons (Desktop) */}
        <Col className="hidden md:flex justify-end items-center space-x-7 ml-5 ">
          <UserOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <div className="w-[2px] h-7 bg-gray-400" />
          <ShoppingCartOutlined className="hover:text-green-300 cursor-pointer text-2xl" />
          <Dropdown overlay={currencyMenu}>
            <a className="hover:text-green-300 !text-white text-lg">INR <DownOutlined /></a>
          </Dropdown>
        </Col>

        {/* Mobile Menu Icon */}
        {/* <Col className="md:hidden flex justify-between items-center w-full">
          <div className="flex space-x-4">
          </div>
          <Button type="text" icon={<MenuOutlined className="!text-white !text-2xl hover:text-green-300 cursor-pointer" />} onClick={toggleDrawer} />
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
          <a href="#" className='subFont !text-black'>About</a>
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



