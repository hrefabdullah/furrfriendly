import React from 'react'
import Hero from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import CategorySection from './components/CategorySection'
import BentoBoxes from './components/BentoBoxes'

const page = () => {
  return (
    <div>
      <Hero />
      <BentoBoxes />
      <CategorySection />
      {/* <FeaturedProducts /> */}
    </div>
  )
}

export default page