import "./ProductCard.css";
import productImg from "../../assets/productImg.jpeg"

const ProductCard = ({name,image, brand}) => {
  return (
    <div className="card-container">
      <div>
        <img className="productImg" src={image} alt="" />
      </div>
      <div className="product-title">
        <span>{brand}</span>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default ProductCard;