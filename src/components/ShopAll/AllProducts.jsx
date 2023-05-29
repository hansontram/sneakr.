import { useEffect, useState } from "react";
import "./AllProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = ({ data, title }) => {
  const [sortBy, setSortBy] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([])
  

//  console.log('sortBy:', sortBy)
 console.log('filtered:', filteredProducts)

  useEffect(() => {
    if (sortBy === 'priceHigh') {
      return setFilteredProducts([...data].sort((a, b) => b.price - a.price));
    } else if (sortBy === 'priceLow'){
      setFilteredProducts([...data].sort((a, b) => a.price - b.price));
    } else if(sortBy === 'newRelease'){
      setFilteredProducts( data.filter(shoe => shoe.isNewRelease))
    } else{
      setFilteredProducts(data)
    }

  }, [sortBy]);


  return (
    <section className="category-section-container">
      
        <label htmlFor="sortShoesBy">
          Sort By:
          <select
            name="sortShoesBy"
            id="sortShoesBy"
            value={sortBy} // force the select value to match the state variable 
            onChange={(e) => setSortBy(e.target.value)} // updates state var on any change
          >
            <option value="relevant">Relevant</option>
            <option value="newRelease">New Release</option>
            <option value="priceLow">Price Low</option>
            <option value="priceHigh">Price High</option>
          </select>
        </label>
     

      <h3>{title.toUpperCase()}</h3>
      <div className="category-card-container">
        {...filteredProducts.map((sneaker, index) => (
          <ProductCard
            key={index}
            name={sneaker.name}
            image={sneaker.image}
            brand={sneaker.brand}
            price={sneaker.price}
          />
        ))}

</div>
    </section>
  );
};

export default AllProducts;

{/* {...data
  // .slice(0, 8)
  .map((sneaker, index) => (
    <ProductCard
      key={index}
      name={sneaker.name}
      image={sneaker.image}
      brand={sneaker.brand}
      price={sneaker.price}
    />
  ))} */}
{/* <div className="btn-container">
<button>Shop {title}</button>
</div> */}