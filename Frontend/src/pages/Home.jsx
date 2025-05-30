import React from 'react'
import Hero from '../component/Hero'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import Categories from '../component/Categories'
import VideoCarousel from '../component/VideoCarousel'
import AboutUs from '../component/AboutUs'
import ReviewSection from '../component/ReviewSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='px-4   sm:px-[2vw] md:px-[2vw] lg:px-[2vw]  '>
      <Categories/>
      <LatestCollection/>
      <VideoCarousel/>
      {/* <BestSeller/> */}
      <AboutUs/>
      <OurPolicy/>
      <ReviewSection/>
      </div>
    </div>
  )
}

export default Home