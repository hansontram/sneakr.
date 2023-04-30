import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./views/Home";
import Shop from "./views/Shop";
import Sale from "./views/Sale";
import Favorites from "./views/Favorites";
import Cart from "./views/Cart";
import About from "./views/About";


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
      
      </div>
  );
};

export default App;
