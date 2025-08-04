import React from 'react';
import commonIcon from '../../assets/commonIcon.png';
import pf1 from '../../assets/portf1.png';
import pf2 from '../../assets/portf21.png';
import pf3 from '../../assets/portf3.png';
import pf31 from '../../assets/portf31.jpeg';
import pf41 from '../../assets/portf41.png';
import pf5 from '../../assets/portf5.png';
import pf4 from '../../assets/portf4.png';

const Portfolio = () => {
  return (
   <div className="py-16 px-4 sm:px-10 md:px-20 bg-white">
  {/* Title Section */}
  <div className="text-center mb-16" id="gallery">
    <div className="flex items-center justify-center mb-4">
      <div className="custom-line" />
      <div className="h-16 w-16 mx-6 flex items-center justify-center">
        <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
      </div>
      <div className="custom-line" />
    </div>
    <h2 className="allheading">Crafted by Us</h2>
    <p className="alldes">
      Explore our diverse collection of successful projects and innovative solutions that showcase our expertise and commitment to excellence. See how our work has helped clients achieve their goals and make an impact.
    </p>
  </div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Large Image */}
    <div className="w-full">
      <img
        src={pf31}
        alt="Portfolio 1"
        className="w-full h-auto object-cover rounded-xl"
      />
    </div>

    {/* Responsive 1-column to 2-column image grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img
        src={pf2}
        alt="Portfolio 2"
        className="portfolio-image"
      />
      <img
        src={pf1}
        alt="Portfolio 3"
        className="portfolio-image"
      />
      {/* <img
        src={pf41}
        alt="Portfolio 4"
        className="portfolio-image hidden sm:block"
      />
      <img
        src={pf5}
        alt="Portfolio 5"
        className="portfolio-image hidden sm:block"
      /> */}

       {/* <img
            src={pf41}
            alt="Portfolio 4"
            className="block portfolio-image max-sm:hidden"
          />
          <img
            src={pf5}
            alt="Portfolio 5"
            className="block portfolio-image max-sm:hidden"
          /> */}

           <img
            src={pf41}
            alt="Portfolio 4"
            className="portfolio-image"
          />
          <img
            src={pf5}
            alt="Portfolio 5"
            className="portfolio-image"
          />
    </div>
  </div>
</div>

  );
};

export default Portfolio;
