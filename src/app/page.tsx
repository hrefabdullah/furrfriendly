import React from 'react'
import Hero from './components/HeroSection'
// import FeaturedProducts from './components/FeaturedProducts'
import CategorySection from './components/CategorySection'
import BentoBoxes from './components/BentoBoxes'
import FeaturedProducts from './components/FeaturedProducts'
import BrandCategory from './components/BrandCategory'

const page = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <BrandCategory />
      {/* <BentoBoxes /> */}
      <FeaturedProducts />
    </div>
  )
}

export default page