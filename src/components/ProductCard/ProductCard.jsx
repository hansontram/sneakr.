import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ sneaker }) => {
  const { name, image, brand, price, id, description } = sneaker;

  return (
    <Link key={id} to={`/shop/${id}`} className="card-container">
      {/* <div className="card-container"> */}
        <div>
          <img className="productImg" src={image} alt="" />
        </div>
        <div className="product-title">
          <span>{brand}</span>
          <h4>{name}</h4>
          {price && <p>${price}</p>}
        </div>
      {/* </div> */}
    </Link>
  );
};

export default ProductCard;
