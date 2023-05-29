import { useEffect, useState } from "react";
import "./AllProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = ({ data, title }) => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const [filteredProducts, setFilteredProducts] = useState([]);

  // console.log("this is filtered", filteredProducts)
  // console.log("this is data", data)
  
  // useEffect(() => {
  //   setProducts(data);
  // }, [data]);

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  useEffect(() => {
    if (sortBy === "priceHigh") {
      return setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
    } else if (sortBy === "priceLow") {
      setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
    } else if (sortBy === "newRelease") {
      setFilteredProducts(filteredProducts.filter((shoe) => shoe.isNewRelease));
    } else if (sortBy === "relevant") {
      setFilteredProducts(data);
    }
  }, [sortBy]);

  useEffect(() => {
    if (filterBy === "airJordan") {
      setFilteredProducts([...filteredProducts].filter((item) => item.brand.includes("Air Jordan")));
    } else if (filterBy === "nike"){
      setFilteredProducts([...filteredProducts].filter((item) => item.brand.includes("Nike")));
    }else if (filterBy === "newBalance"){
      setFilteredProducts([...filteredProducts].filter((item) => item.brand.includes("New Balance")));
    }else if (filterBy === "yeezy"){
      setFilteredProducts([...filteredProducts].filter((item) => item.brand.includes("Yeezy")));
    }
  }, [filterBy]);
  


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
          <option value="priceLow">Price Low</option>
          <option value="priceHigh">Price High</option>
          <option value="newRelease">New Release</option>
        </select>
      </label>

      <label htmlFor="filterProduct">
        Filter By:
        <select
          name="filterProduct"
          id="filterProduct"
          // value={sortBy}
          onChange={(e) => setFilterBy(e.target.value)} // updates state var on any change
        >
          <option value=""></option>
          <option value="nike">Nike</option>
          <option value="airJordan">Air Jordan</option>
          <option value="newBalance">New Balance</option>
          <option value="yeezy">Yeezy</option>
        </select>
      </label>

      <h3>{title.toUpperCase()}</h3>
      <div className="category-card-container">
        { 
        ...filteredProducts.map((sneaker, index) => (
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

{
  /* {...data
  // .slice(0, 8)
  .map((sneaker, index) => (
    <ProductCard
      key={index}
      name={sneaker.name}
      image={sneaker.image}
      brand={sneaker.brand}
      price={sneaker.price}
    />
  ))} */
}
{
  /* <div className="btn-container">
<button>Shop {title}</button>
</div> */
}
