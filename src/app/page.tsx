import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/HeroSection'
// import FeaturedProducts from './components/FeaturedProducts'
import CategorySection from './components/CategorySection'
import BentoBoxes from './components/BentoBoxes'
import FeaturedProducts from './components/FeaturedProducts'
import BrandCategory from './components/BrandCategory'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySection />
      <BrandCategory />
      {/* <BentoBoxes /> */}
      {/* <FeaturedProducts /> */}
      <Footer />
    </div>
  )
}

export default page