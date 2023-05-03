import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero/Hero'
import ProductCategory from '../components/Home/ProductCategory/ProductCategory'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ProductCategory/>
      <ProductCategory/>
      <Footer/>
    </div>
  )
}

export default Home
