import './App.css'
import BestSelling from './components/bestSelling'
import BestServices from './components/bestServices'
import BottomBar from './components/bottombar'
import CustomerReview from './components/customerReview'
import Emailsub from './components/emailsub'
import Hero from './components/hero'
import KeyAdvantages from './components/keyAdvantages'
import LatestNews from './components/latestNews'
import NewRange from './components/newRange'
import Portfolio from './components/portfolio'
import ProductType from './components/productType'
import SliderImage from './components/slider'
import Specification from './components/specification'
import { TeamDes } from './components/teamDes'
import WhatYouNeed from './components/whatYouNeed'

function App() {

  return (
    <>
      <Hero/>
      <ProductType/>
      {/* <NewRange/> */}
      <BestServices/>
      <WhatYouNeed/>
      {/* <BestSelling/> */}
      <CustomerReview/>
      <KeyAdvantages/>
      <Portfolio/>
      <Emailsub/>
      <TeamDes/>
      <LatestNews/>
      <Specification/>
      <SliderImage/>
      <BottomBar/>
    </>
  )
}

export default App
