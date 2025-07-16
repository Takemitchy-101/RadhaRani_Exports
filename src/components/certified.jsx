import React from "react";
import epr from "../assets/Epr.png";
import indiaMart from "../assets/Indiamart.jpg";
import cait from "../assets/Cait.png";
import spicesBoard from "../assets/SpicesBoard.jpg";
import fssai from "../assets/Fssai.png";
import apeda from "../assets/Apeda.png";

export const Certified = () => {
    return (
        <div className="px-4 py-10 max-w-6xl mx-auto">
            {/* Certifications Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    We are certified under
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                        { label: "APEDA", img: apeda },
                        { label: "FSSAI", img: fssai },
                        { label: "Spices Board", img: spicesBoard },
                        { label: "EPR Registered", img: epr },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.label}
                                className="h-16 object-contain mb-3"
                            />
                            <p className="text-sm font-medium text-gray-700 text-center">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Memberships Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Proud Members
                </h2>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { label: "Confederation of All India Traders", img: cait },
                            { label: "IndiaMart", img: indiaMart },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="h-16 object-contain mb-3"
                                />
                                <p className="text-sm font-medium text-gray-700 text-center">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certified;
