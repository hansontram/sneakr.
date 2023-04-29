import "./ProductSection.css";
import ProductCard from '../ProductCard'

const ProductSection = () => {
  return (
    <section className='product-section-container'>
        
        <div className="category-container">
        <ProductCard className="card"/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
        {/* <button>Shop New Releases</button> */}
    </section>
  )
}

export default ProductSection
