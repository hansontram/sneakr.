import Navbar from '../components/Navbar/Navbar'
import AllProducts from '../components/ShopAll/AllProducts'

const Shop = ({data}) => {

  return (
    <div>
      <Navbar/>
        {/* Iterates and sorts alphabetically */}
        <AllProducts data={data
          .map(shoe => shoe)
          .sort((a, b) => a.name.localeCompare(b.name))} 
        title="Shop All" />

    </div>
  )
}

export default Shop
