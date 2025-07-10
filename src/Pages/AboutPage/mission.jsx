import React from "react";
import { Card } from "antd";
import { Leaf } from "lucide-react";

export const Mission = () => {
    return (
        <div>
            <div className="flex justify-center items-center px-4 py-8 bg-white mt-10">
                <Card
                    className="max-w-7xl w-full rounded-3xl shadow-xl border-none"
                    bodyStyle={{ padding: "40px 32px" }}
                >
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 headFont">
                            Our Mission
                        </h2>
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

