import React, { useEffect, useState } from "react";
import "./atc.css";
import { Link } from "react-router-dom";

function AddtoCart({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  function handleAddToCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, { ...product, qty: 1 }]);
    } 
  }

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Shopify!</h1>

        <ul>
          <li>Home</li>
          <li>Products</li>
        </ul>

        <Link to="/cart">
          <button>
            🛒<span className="cart-count">{cart.length}</span>
          </button>
        </Link>
      </nav>

      {isLoading ? (
        <h2 style={{ textAlign: "center", marginTop: "120px" }}>Loading...</h2>
      ) : (
        <div className="card">
          <ul>
            {products.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} className="card-image" />
                  <p className="title">{item.title}</p>
                  <p className="price">₹ {item.price}</p>

                  <button className="addtocart" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default AddtoCart;
