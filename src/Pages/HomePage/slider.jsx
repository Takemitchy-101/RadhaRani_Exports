import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import commonIcon from '../../assets/commonIcon.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sd1 from '../../assets/slider1.png';
import sd2 from '../../assets/slider2.png';
import sd3 from '../../assets/slider3.png';
import sd4 from '../../assets/slider4.png';
import sd5 from '../../assets/slider5.png';
import { BiLocationPlus } from 'react-icons/bi';
import { SiGooglemaps } from 'react-icons/si';

export const SliderImage = () => {

  const SliderData = [
    { id: 1, image: sd1 },
    { id: 2, image: sd2 },
    { id: 3, image: sd3 },
    { id: 4, image: sd4 },
    { id: 5, image: sd5 },
    { id: 6, image: sd1 },
    { id: 7, image: sd2 },
  ];

  const centerIndex = Math.ceil(SliderData.length / 2);
  const [activeSlide, setActiveSlide] = useState(centerIndex);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: centerIndex,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleSlideClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index);
  };

  return (
    <div className='px-4 pt-8 overflow-hidden bg-gradient-to-b from-[#eeffee] to-white'>
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 z-10 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="custom-line" />
            <div className="h-16 w-16 mx-6 flex items-center justify-center">
              <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
            </div>
            <div className="custom-line" />
          </div>
          <h2 className="allheading">Highlighted Selections</h2>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {SliderData.map((item, index) => (
            <div key={item.id} className='px-2 sm:px-4 cursor-pointer' onClick={() => handleSlideClick(index)}>
              <div
                className={`rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 ${index === activeSlide
                  ? 'scale-100 shadow-[#eeffee]' : 'scale-95 opacity-65'}`}
              >
                <img
                  src={item.image}
                  alt={`Slide ${index}`}
                  className='w-full lg:h-60 object-cover'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <div className="px-4 mt-30 flex justify-center flex-col items-center">
        
        <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center mb-4 border-1 border-gray-300 px-2 py-2 ">
            {/* <div className="custom-line !w-[200px]" /> */}
          <SiGooglemaps className="text-2xl sm:text-4xl md:text-5xl text-red-500" />
          <span className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 headFont">
            Visit Us at Our Office Location
          </span>
            {/* <div className="custom-line !w-[200px]" /> */}
        </h2>

        <div className="w-screen overflow-hidden shadow-md">
          <iframe
            title="Radha Rani Exports Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.642689125109!2d88.350333!3d22.585861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzA5LjEiTiA4OMKwMjEnMDEuMiJF!5e0!3m2!1sen!2sin!4v1718618200000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
};

export default SliderImage;
