import "./ProductCategory.css";
import ProductCard from "../../ProductCard/ProductCard";

const ProductCategory = ({ data, title }) => {
  // const shoes = data.map(()=>)
  return (
    <section className="category-section-container">
      <h3>{title.toUpperCase()}</h3>
      <div className="category-card-container">
        {...data
          // .slice(0, 8)
          .map((sneaker, index) => (
            <ProductCard
              key={index}
              name={sneaker.name}
              image={sneaker.image}
              brand={sneaker.brand}
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
