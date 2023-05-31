import { useEffect, useState } from "react";
import "./AllProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = ({ data, title }) => {
  const [sortBy, setSortBy] = useState("relevant");
  const [filterBy, setFilterBy] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [products, setProducts] = useState([])

const sortProducts = (sortBy) => {
  // conditional logic 
}
const filterProducts = (filterBy) => {
  // conditional logic 
}

  useEffect(() => {
    setFilteredProducts(data);
    // setProducts(data)
  }, [data]);

  useEffect(() => {

    if (sortBy === "priceHigh") {
      setFilteredProducts((prevData) => {
        console.log("prevData", prevData);
        return [...prevData].sort((a, b) => b.price - a.price);
      });
    } else if (sortBy === "priceLow") {
      setFilteredProducts((prevData) =>
        [...prevData].sort((a, b) => a.price - b.price)
      );
    } else if (sortBy === "newRelease") {
      setFilteredProducts((prevData) =>
        prevData.filter((shoe) => shoe.isNewRelease)
      );
    } else if (sortBy === "relevant") {
      setFilteredProducts(data);
    }
  }, [sortBy]);



  useEffect(() => {
    let ogData = [...data]
    
    if (filterBy === "airJordan") {
      if (filterBy.length > 0) {
        setFilteredProducts(
          ogData.filter((item) => item.brand.includes("Air Jordan"))
        );
      } else {
        setFilteredProducts((prevData) =>
          [...prevData].filter((item) => item.brand.includes("Air Jordan"))
        );
      }
    } else if (filterBy === "nike") {
      if (filterBy.length > 0) {
        setFilteredProducts(
          ogData.filter((item) => item.brand.includes("Nike"))
        );
      } else {
        setFilteredProducts((prevData) =>
          [...prevData].filter((item) => item.brand.includes("Nike"))
        );
      }
    } else if (filterBy === "newBalance") {
      if (filterBy.length > 0) {
        setFilteredProducts(
          ogData.filter((item) => item.brand.includes("New Balance"))
        );
      } else {
        setFilteredProducts((prevData) =>
          [...prevData].filter((item) => item.brand.includes("New Balance"))
        );
      }
    } else if (filterBy === "yeezy") {
      if (filterBy.length > 0) {
        setFilteredProducts(
          ogData.filter((item) => item.brand.includes("Yeezy"))
        );
      } else {
        setFilteredProducts((prevData) =>
          [...prevData].filter((item) => item.brand.includes("Yeezy"))
        );
      }
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
          value={filterBy}
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

{
  /* <div className="btn-container">
<button>Shop {title}</button>
</div> */
}
