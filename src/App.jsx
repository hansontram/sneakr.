import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Shop from "./views/Shop";
import Sale from "./views/Sale";
import Favorites from "./views/Favorites";
import Cart from "./views/Cart";
import About from "./views/About";
import Product from "./views/Product";

import mockData from "./data.json";

const App = () => {
  const [data, setData] = useState([]);

    // TODO: Cart-function: set state
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, []);
  


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/shop" element={<Shop data={data} />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          {/* // TODO: Cart-function: set state */}
          <Route path="/shop/:id" element={<Product data={data} cart={cart} setCart={setCart}/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
