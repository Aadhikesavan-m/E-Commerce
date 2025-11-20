import React, { useEffect, useState } from "react";
import "./atc.css";
import { Link } from "react-router-dom";
import Img from "./assets/no search.jpg";

function AddtoCart({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      })
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  function handleAddToCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function searchBar(value) {
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  }

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Shopify!</h1>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search…"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  searchBar(e.target.value);
                }}
                className="search-bar"
              />

              <button>🔍</button>
            </div>
          </li>
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
          {products.length > 0 ? (
            <ul>
              {products.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} className="card-image" />
                    <p className="title">{item.title}</p>
                    <p className="price">₹ {item.price}</p>

                    <button
                      className="addtocart"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-product-wrapper">
              <img src={Img} alt="No_product_img" className="no-product-img" />
              <h1 className="no-product">"Sorry! No Products Found..☹️"</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AddtoCart;
