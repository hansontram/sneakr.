import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ShopAll/ProductList";
import { Link } from "@mui/icons-material";

const Shop = ({ data }) => {
  return (
    <div>
      <Navbar />
      {/* Iterates and sorts alphabetically */}
      <ProductList
        data={data
          .map((shoe) => shoe)
          .sort((a, b) => a.name.localeCompare(b.name))}
        title="Shop All"
      />
    </div>

  );
};

export default Shop;
