import React from 'react'
import ZibberHeader from './ZibberHeader'
import Hero from './Hero'
import Navbar from './Navbar'
import Features from './Features'
import Consulting from './Consulting'
import ProfitSection from './ProfitSection'
import FeatureCard from './FeatureCard'
import Carousal from './Carousal'
import Cards from './Cards'
import Accordian from './Accordian'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Consulting/>
      <ProfitSection/>
      <FeatureCard/>
      <Carousal/>
      {/* <Cards/> */}
      <Accordian/>
      <Footer/>
    </>
  )
}

export default App