import "./ProductCard.css";
import productImg from "../../assets/productImg.jpeg";
import { Link } from "react-router-dom";

const ProductCard = ({ sneaker }) => {
  const { name, image, brand, price, id } = sneaker;

  return (
    <Link key={id} to={`/shop/${id}`}>
      <div className="card-container">
        <div>
          <img className="productImg" src={image} alt="" />
        </div>
        <div className="product-title">
          <span>{brand}</span>
          <h4>{name}</h4>
          {price && <p>${price}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
