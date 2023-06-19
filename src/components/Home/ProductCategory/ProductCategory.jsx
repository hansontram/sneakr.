import "./ProductCategory.css";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductCategory = ({ data, title }) => {
  return (
    <section className="category-section-container">
      <h3>{title.toUpperCase()}</h3>
      <div className="category-card-container">
        {...data
          .map((sneaker, index) => (
            <ProductCard key={index} 
            sneaker={sneaker}
             />
          ))}
      </div>
      <div className="btn-container">
        <button>Shop {title}</button>
      </div>
    </section>
  );
};

export default ProductCategory;
