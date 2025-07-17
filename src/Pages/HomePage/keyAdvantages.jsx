import React, { useState } from 'react';
import mainIg from '../../assets/keyAdMain.png';
import logo1 from '../../assets/keyAdlogo1.png';
import logo2 from '../../assets/keyAdlogo2.png';
import logo3 from '../../assets/keyAdlogo3.png';
import { Row, Col, Button } from 'antd';
import commonIcon from '../../assets/commonIcon.png';

// Logo Imports
import epr from "../../assets/Epr.png";
import indiaMart from "../../assets/IndiaMart.jpg";
import cait from "../../assets/Cait.png";
import spicesBoard from "../../assets/SpicesBoard.jpg";
import fssai from "../../assets/Fssai.png";
import apeda from "../../assets/Apeda.png";

export const KeyAdvantages = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const keyAdData = [
    {
      id: 1,
      image: logo1,
      heading: 'Trusted Ayurvedic Sourcing Partner',
      des: 'With years of experience in sourcing premium-grade Ayurvedic herbs, we ensure reliable, ethical, and farm-direct supply to global clients.',
      fullDetails: `We connect directly with farmers and ensure transparency in sourcing. Quality and trust are our pillars.`,
    },
    {
      id: 2,
      image: logo2,
      heading: 'Certified Herbs',
      des: 'We are committed to providing the finest, ensuring every product meets the highest standards. All materials are thoroughly tested for purity and potency. We provide lab reports and certifications to ensure you get what you expect—every time',
      fullDetails: `All materials are thoroughly tested for purity and potency.

We provide lab reports and certifications to ensure you get what you expect—every time.`,
    },
    {
      id: 3,
      image: logo3,
      heading: 'Export-Ready Logistics',
      des: 'From documentation to packaging, we handle all compliance requirements to ensure a smooth export experience for bulk Ayurvedic buyers worldwide.',
      fullDetails: `We handle documentation, packaging, labeling, and export compliance so you don't have to.`,
    },
  ];

  const logoMap = {
    APEDA: apeda,
    FSSAI: fssai,
    'Spices Board': spicesBoard,
    'EPR Registered': epr,
    'IndiaMart': indiaMart,
    'Confederation of All India Traders': cait,
  };

  const handleReadMore = (id) => setExpandedCardId(id);
  const handleClose = () => setExpandedCardId(null);
  const expandedCard = keyAdData.find((item) => item.id === expandedCardId);

  return (
    <div id="key-advantages" className="px-4 sm:px-6 lg:px-12 py-10">
      {/* Header */}
      <div className="text-center z-10 relative mb-10">
        <div className="flex items-center justify-center mb-4">
          <div className="custom-line hidden sm:block" />
          <div className="h-16 w-16 mx-4 flex items-center justify-center">
            <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
          </div>
          <div className="custom-line hidden sm:block" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2 leading-relaxed md:leading-loose">
          Bridging ancient Ayurvedic knowledge with modern cultures across the world. Rooted in tradition, thriving in the modern world—Ayurveda for every culture.
        </p>
      </div>

      {/* Section */}
      <div className="w-full bg-[#73BE73] rounded-3xl overflow-hidden p-4 sm:p-6">
        <Row gutter={[16, 16]} align="middle">
          {/* Left Image */}
          <Col xs={24} md={10}>
            <img src={mainIg} alt="Main" className="w-full h-auto object-cover rounded-2xl" />
          </Col>

          {/* Right Content */}
          <Col xs={24} md={14}>
            {expandedCard ? (
              <div className="flip-card flipped card-animate">
                <div className="flip-card-inner">
                  <div className="flip-card-back p-2 sm:p-4">
                    <h3 className="text-green-700 font-bold text-lg sm:text-xl md:text-2xl uppercase mb-2 headFont">
                      {expandedCard.heading}
                    </h3>
                    <p className="text-gray-800 text-sm sm:text-base mb-4 leading-relaxed subFont font-semibold">
                      {expandedCard.des}
                    </p>

                    <div className="text-gray-700 subFont text-sm sm:text-base md:text-lg mb-4 space-y-2 leading-relaxed">
                      {expandedCard.heading === 'Certified Herbs' ? (
                        <>
                          <p>
                            All materials are thoroughly tested for purity and potency.
                            <br />
                            We provide lab reports and certifications to ensure you get what you expect—every time.
                          </p>

                          <div className="mt-4">
                            <p className="font-semibold text-green-700 mb-2">We are certified under:</p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                              {['APEDA', 'FSSAI', 'Spices Board', 'EPR Registered'].map((name) => (
                                <div key={name} className="flex items-center gap-2">
                                  <img src={logoMap[name]} alt={name} className="w-8 h-8 object-contain" />
                                  <span className="text-xs sm:text-sm md:text-base font-semibold">{name}</span>
                                </div>
                              ))}
                            </div>

                            <p className="font-semibold text-green-700 mb-2">Proud Members:</p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                              {['Confederation of All India Traders', 'IndiaMart'].map((name) => (
                                <div key={name} className="flex items-center gap-2">
                                  <img src={logoMap[name]} alt={name} className="w-8 h-8 object-contain" />
                                  <span className="text-xs sm:text-sm md:text-base font-semibold">{name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <p>{expandedCard.fullDetails}</p>
                      )}
                    </div>

                    <Button
                      type="default"
                      size="small"
                      className="!bg-green-700 !text-white !font-semibold !border-none !rounded-full !px-4 hover:!bg-green-900 transition-transform"
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8 sm:space-y-10">
                {keyAdData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 transform transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                  >
                    <img src={item.image} alt={item.heading} className="w-14 h-14 sm:w-[60px] sm:h-[60px]" />
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase mb-2 headFont">
                        {item.heading}
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-md mb-4 leading-relaxed subFont">
                        {item.des}
                      </p>
                      <Button
                        type="default"
                        size="small"
                        className="!bg-white headFont !text-black !font-semibold !border-none !rounded-full !px-4 hover:!bg-green-800 hover:!text-white transition-transform"
                        onClick={() => handleReadMore(item.id)}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default KeyAdvantages;
