import React from 'react'
import spc1 from '../../assets/spc1.png'
import spc2 from '../../assets/spc2.png'
import spc3 from '../../assets/spc3.png'
import spc4 from '../../assets/spc4.png'
import spc5 from '../../assets/spc5.png'
import lastbg from '../../assets/lastBG.png'
import { Row, Col } from 'antd'

export const Specification = () => {

    const specifyData = [
            {
                id: 1,
                image: spc1,
                heading: "Cruelty Free",
            },
            {
                id: 2,
                image: spc2,
                heading: "Clean Ingredients",
            },
            {
                id: 3,
                image: spc3,
                heading: "Zero Sulphate",
            },
            {
                id: 4,
                image: spc4,
                heading: "No Synthetic Fragrances",
            },
            {
                id: 5,
                image: spc5,
                heading: "Zero Dyes",
            },
        ]

    return (
        <div className="py-10 px-6 relative">
            <img 
                src={lastbg} 
                alt="decor"
                className='absolute left-0 w-[85px] md:w-[200px] opacity-40 pointer-events-none z-0'
                />

            <Row gutter={[32, 32]} justify="center">
                {specifyData.map((item) => (
                    <Col key={item.id} xs={12} sm={8} md={6} lg={4}>
                        <div className="text-center p-4">
                            <img
                                src={item.image}
                                alt={item.heading}
                                className="mx-auto w-24 h-24 object-contain"
                            />
                            <div className="font-semibold text-base mt-3">{item.heading}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Specification;
