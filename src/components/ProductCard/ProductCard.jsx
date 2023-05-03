import "./ProductCard.css";
import productImg from "../../assets/productImg.jpeg"

const ProductCard = () => {
  return (
    <div className="card-container">
      <div>
        <img className="productImg" src={productImg} alt="" />
      </div>
      <div className="product-title">
        <span>Air Jordan</span>
        <h4>TRAVIS SCOTT X WMNS AIR JORDAN RETRO LOW OG 'OLIVE'</h4>
      </div>
    </div>
  );
};

export default ProductCard;
