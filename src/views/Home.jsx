import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Footer from '../components/Footer/Footer'
import ProductCategory from '../components/Home/ProductCategory/ProductCategory'
import ProductCard from '../components/ProductCard/ProductCard'


const Home = ({ data }) => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductCategory data={data.filter(shoe => shoe.isNewRelease).slice(0, 8)} title="New Releases" />
      <ProductCategory data={data.filter(shoe => shoe.isBestSeller).slice(0, 8)} title="Top Sellers"/>

      <Footer/>
    </div>
  )
}

export default Home
