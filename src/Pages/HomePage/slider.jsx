import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import commonIcon from '../../assets/commonIcon.png';
import sd1 from '../../assets/slider1.png';
import sd2 from '../../assets/slider2.png';
import sd3 from '../../assets/slider3.png';
import sd4 from '../../assets/slider4.png';
import sd5 from '../../assets/slider5.png';
import { SiGooglemaps } from 'react-icons/si';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderImage = () => {
  const SliderData = [
    { id: 1, image: sd1 },
    { id: 2, image: sd2 },
    { id: 3, image: sd3 },
    { id: 4, image: sd4 },
    { id: 5, image: sd5 },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='px-4 pt-8 overflow-hidden bg-gradient-to-b from-[#eeffee] to-white'>
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 z-10 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="custom-line" />
            <div className="h-16 w-16 mx-6 flex items-center justify-center">
              <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
            </div>
            <div className="custom-line" />
          </div>
          <h2 className="allheading">Highlighted Selections</h2>
        </div>

        {/* Conditional Rendering: Slider for mobile, grid for desktop */}
        {isMobile ? (
          <Slider {...mobileSliderSettings}>
            {SliderData.map((item) => (
              <div key={item.id} className="px-2">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={`Slide ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
            {SliderData.map((item) => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:brightness-105 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`Highlight ${item.id}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="px-4 mt-20 flex justify-center flex-col items-center">
        <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center mb-4 px-2 py-2">
          <SiGooglemaps className="text-2xl sm:text-4xl md:text-5xl text-red-500" />
          <span className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 headFont">
            Visit Us at Our Office Location
          </span>
        </h2>

        <div className="w-screen">
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
