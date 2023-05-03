import "./Navbar.css";
import { Link, } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <Link className="logo" to="/">
          <h1>sneakr.</h1>
        </Link>
      </div>
    
        <div className="links-container">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/shop">
            Shop
          </Link>
          <Link className="link" to="/sale">
            Sale
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div className="icon-container">
          <Link className="icon" to="/favorites">
            <FavoriteBorderIcon />
          </Link>
          <Link className="icon" to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
