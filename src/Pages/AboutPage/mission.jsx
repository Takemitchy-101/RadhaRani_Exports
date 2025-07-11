import React from "react";
import { Card } from "antd";
import { Leaf } from "lucide-react";
import commonIcon from '../../assets/commonIcon.png';

export const Mission = () => {
    return (
        <div className="py-10">
            <div className="text-center mb-5 z-10 relative">
                <div className="flex items-center justify-center mb-4">
                    <div className="custom-line" />
                    <div className="h-16 w-16 mx-6 flex items-center justify-center">
                        <img src={commonIcon} alt="icon" className="h-12 w-12 object-contain" />
                    </div>
                    <div className="custom-line" />
                </div>
                <h2 className="allheading">Empowering Ayurveda
                </h2>
                {/* <p className="alldes">
                    To revive ancient Ayurvedic wisdom and promote natural, balanced living for holistic health and well-being.
                </p> */}
            </div>

            <div className="flex justify-center items-center px-4  bg-white ">
                <Card
                    className="max-w-7xl w-full rounded-3xl border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                    bodyStyle={{ padding: "40px 32px" }}
                >
                    <div className="text-center space-y-6">
                        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 headFont">
                            Our Mission
                        </h2> */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed subFont ">
                            Our mission is to become a <strong className="font-semibold">one-stop buying point</strong> for all Ayurvedic manufacturing companies, providing them with high-quality raw materials and products that meet their specific requirements. We are committed to ensuring the highest standards of quality and service, making us a preferred partner for businesses looking to source authentic and effective ingredients.
                        </p>
                        <div className="inline-flex items-center space-x-2 bg-orange-50 text-green-600 px-6 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300">
                            <Leaf className="w-7 h-7" />
                            <span>Quality • Authenticity • Reliability</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};


export default Mission;

