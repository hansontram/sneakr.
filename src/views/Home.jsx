import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero/Hero'
import ProductCategory from '../components/Home/ProductCategory/ProductCategory'
import Footer from '../components/Footer/Footer'
import ProductCard from '../components/ProductCard/ProductCard'
import mockData from '../data.json'

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() =>{
    setData(mockData)
  },[])

  useEffect(() =>{
    console.log("state:",data)
  },[data])

  return (
    <div>
      <Navbar/>
      <Hero/>

      <ProductCategory data={data.filter(shoe => shoe.isNewRelease)} title="New Release" setData={setData}/>
      <ProductCategory data={data.filter(shoe => shoe.isBestSeller)} title="Top Sellers"/>
      <Footer/>
    </div>
  )
}

export default Home
