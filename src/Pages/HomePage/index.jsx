import AboutUs from '../AboutPage/aboutUs'
import Establishment from '../AboutPage/establishment'
import GlobalExpansion from '../AboutPage/globalExpansion'
import Mission from '../AboutPage/mission'
import BestSelling from './bestSelling'
import BestServices from './bestServices'
// import BottomBar from './bottombar'
import CustomerReview from './customerReview'
import Emailsub from './emailsub'
import Hero from './hero'
import KeyAdvantages from './keyAdvantages'
import LatestNews from './latestNews'
import NewRange from './newRange'
import Portfolio from './portfolio'
import ProductType from './productType'
import SliderImage from './slider'
import Specification from './specification'
import { TeamDes } from './teamDes'
import WhatYouNeed from './whatYouNeed'

export const Home = () => {
    return (
        <>
            <Hero />
            <ProductType />
            {/* <NewRange/> */}
            <Establishment/>
            <BestSelling />
            <BestServices />
            <WhatYouNeed />
            {/* <CustomerReview /> */}
            <GlobalExpansion/>
            <KeyAdvantages />
            <Mission/>
            <Portfolio />
            {/* <Emailsub /> */}
            {/* <TeamDes/> */}
            {/* <LatestNews /> */}
            <Specification />
            <SliderImage />
            {/* <BottomBar /> */}
        </>
    )
}