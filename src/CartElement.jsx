import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, setCart }) {
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <h3 className="empty">Your cart is empty 🛒</h3>
          <div className="full-center">
            <button className="go-purchase-btn" onClick={() => navigate("/")}>
              Go to Purchase
            </button>
          </div>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt="" className="cart-img" />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>₹ {item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-box">
            <center>
              <h2>Total: ₹{total.toFixed(2)}</h2>
              <button className="checkout">Checkout</button>
            </center>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
