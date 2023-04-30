import "./ProductCategory.css";
import ProductCard from "../ProductCard";

const ProductCategory = () => {
  return (
    <section className="category-section-container">
      <h3>NEW RELEASES</h3>
      <div className="category-card-container">
        <ProductCard className="card" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="btn-container">
        <button>Shop New Releases</button>
      </div>
    </section>
  );
};

export default ProductCategory;
