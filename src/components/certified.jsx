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
                            { label: "IndiaMart", img: "https://scontent.fidr4-1.fna.fbcdn.net/v/t39.30808-6/358449647_657270309776687_5599326795183758935_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uvHt6FG2XoEQ7kNvwGHAVzJ&_nc_oc=AdnztKu9xk7pZMoxUsCoHfrC08gUfe4eHPtVThqsVlIks5-woW52VHnkOIzET8KolIcLUvfT-rcbzXreBSiduOIg&_nc_zt=23&_nc_ht=scontent.fidr4-1.fna&_nc_gid=1mrAVd1aqpSBx87be3XCBg&oh=00_AfS4lkymkEZtn4n_HPqwGRUO0GQm76U9dna88_mLTnZWGg&oe=687D7CB0" },
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
