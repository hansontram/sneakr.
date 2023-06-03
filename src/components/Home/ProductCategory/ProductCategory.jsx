import "./ProductCategory.css";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductCategory = ({ data, title }) => {
  return (
    <section className="category-section-container">
      <h3>{title.toUpperCase()}</h3>
      <div className="category-card-container">
        {...data
          // .slice(0, 8)
          .map((sneaker, index) => (
            // <Link key={sneaker.id} to={`/shop/${sneaker.id}`}>
            <ProductCard key={index} sneaker={sneaker} />
            // </Link>
          ))}
      </div>
      <div className="btn-container">
        <button>Shop {title}</button>
      </div>
    </section>
  );
};

export default ProductCategory;
