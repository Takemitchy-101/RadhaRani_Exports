import React from 'react';
import profile1 from '../../assets/profile3.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
// import image from '../../assets/Profile'
import commonIcon from '../../assets/commonIcon.png';
import tbg from '../../assets/teamBg.png';
import { Row, Col } from 'antd';

export const TeamDes = () => {
    const ProfileData = [
        {
            id: 1,
            image: profile1,
            name: "John Doe",
            role: "Product Care"
        },
        {
            id: 2,
            image: profile2,
            name: "Jenny Doe",
            role: "Marketing"
        },
        {
            id: 3,
            image: profile3,
            name: "Tom Abell",
            role: "Human Resource"
        },
    ];

    return (
        <div className="flex flex-col items-center relative overflow-hidden">
            <img
                src={tbg}
                alt="decorative background"
                className="absolute top-0 right-0 w-[85px] md:w-[120px] opacity-40 pointer-events-none z-0"
            />

            <div className="flex items-center my-10 z-10">
                <div className="custom-line" />
                <div className="h-16 w-16 flex items-center justify-center rounded-full mx-3">
                    <img
                        src={commonIcon}
                        alt="Team Icon"
                    />
                </div>
                <div className="custom-line" />
            </div>

            <h2 className="allheading">
               Team of Experts
            </h2>

            <p className="alldes">
                Get to know the dedicated individuals who are the heart of our company, driving our mission with passion and expertise. We're a team committed to excellence and eager to serve you.
            </p>

            <Row gutter={[24, 24]} justify="center" className="z-10 w-full px-4 py-4">
                {ProfileData.map((item) => (
                    <Col key={item.id} xs={24} sm={12} lg={6}>
                        <div className="text-center mt-10 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-[220px] w-[220px] object-contain rounded-full mx-auto"
                            />
                            <div className="font-semibold text-2xl mt-4 headFont">{item.name}</div>
                            <div className="text-sm mt-2 text-gray-600 uppercase tracking-wide subFont">{item.role}</div>
                        </div>
                    </Col>
                ))}
            </Row>

        </div>
    );
};
