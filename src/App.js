import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import ShoppingCart from "./routes/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
