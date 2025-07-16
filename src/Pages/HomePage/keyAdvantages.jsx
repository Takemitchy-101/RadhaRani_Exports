import React, { useState } from 'react';
import mainIg from '../../assets/keyAdMain.png';
import logo1 from '../../assets/keyAdlogo1.png';
import logo2 from '../../assets/keyAdlogo2.png';
import logo3 from '../../assets/keyAdlogo3.png';
import { Row, Col, Button } from 'antd';
import commonIcon from '../../assets/commonIcon.png';

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
            fullDetails: `
        All materials are thoroughly tested for purity and potency.

        We provide lab reports and certifications to ensure you get what you expect—every time.

        We are certified under:

        • <strong>APEDA</strong>
        • <strong>FSSAI</strong>
        • <strong>Spices Board</strong>
        • <strong>EPR Registered</strong>

        Proud Members:
        • <strong>Confederation of All India Traders</strong>
        • <strong>IndiaMart</strong>
        `,
        },
        {
            id: 3,
            image: logo3,
            heading: 'Export-Ready Logistics',
            des: 'From documentation to packaging, we handle all compliance requirements to ensure a smooth export experience for bulk Ayurvedic buyers worldwide.',
            fullDetails: `We handle documentation, packaging, labeling, and export compliance so you don't have to.`,
        },
    ];

    const handleReadMore = (id) => {
        setExpandedCardId(id);
    };

    const handleClose = () => setExpandedCardId(null);

    const expandedCard = keyAdData.find((item) => item.id === expandedCardId);

    return (
        <div id="key-advantages">
            {/* Header */}
            <div className="text-center z-10 relative mb-10">
                <div className="flex items-center justify-center mb-4">
                    <div className="custom-line" />
                    <div className="h-16 w-16 mx-6 flex items-center justify-center">
                        <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
                    </div>
                    <div className="custom-line" />
                </div>
                <h2 className="allheading text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Why Choose Us
                </h2>
                <p className="alldes text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-2">
                    Bridging ancient Ayurvedic knowledge with modern cultures across the world. Rooted in tradition, thriving in the modern world—Ayurveda for every culture.
                </p>
            </div>

            {/* Section */}
            <div className="w-full bg-[#73BE73] rounded-3xl overflow-hidden pr-10">
                <Row gutter={[24, 24]} align="middle">
                    {/* Left Image */}
                    <Col xs={24} md={10}>
                        <img src={mainIg} alt="Main" className="w-full h-full object-cover" />
                    </Col>

                    {/* Right Content */}
                    <Col xs={24} md={14}>
                        {expandedCard ? (
                            <div className="flip-card flipped card-animate">
                                <div className="flip-card-inner">
                                    <div className="flip-card-back">
                                        <h3 className="text-green-700 font-bold text-xl md:text-2xl uppercase mb-2 headFont">
                                            {expandedCard.heading}
                                        </h3>
                                        <p className="text-gray-800 text-md mb-4 subFont font-semibold">
                                            {expandedCard.des}
                                        </p>
                                        <div
                                            className="text-gray-700 subFont text-sm md:text-base mb-4 space-y-1"
                                            dangerouslySetInnerHTML={{ __html: expandedCard.fullDetails.replace(/\n/g, '<br/>') }}
                                        />
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
                            <div className="space-y-10">
                                {keyAdData.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-6 transform transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                                    >
                                        <img src={item.image} alt={item.heading} className="w-[60px] h-[60px] mt-1" />
                                        <div>
                                            <h3 className="text-white font-bold text-lg uppercase mb-2 headFont">
                                                {item.heading}
                                            </h3>
                                            <p className="text-white text-md mb-4 leading-relaxed subFont">
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
