import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import CartPage from "./CartElement";
import { useState } from "react";
import UnknownFile from "./UnknownFile";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddtoCart cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="*" element={<UnknownFile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
