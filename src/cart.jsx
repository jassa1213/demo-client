import React, { useEffect } from "react";
import "./cart.css";
import { useNavigate } from "react-router";



const Cart = () => {
  const navigate = useNavigate()

  const cart = JSON.parse(localStorage.getItem('cart')) && 
  JSON.parse(localStorage.getItem("cart"));
  useEffect((cart)=>{
    console.log(cart)
  },[])


  return (
    <div className="cart">
    <h5>Cart Items</h5>
    <div className="cart_products">
      {cart.length === 0 ? (
        <div className="empty_cart">

        <p>You have 0 cart items.</p>
        </div>
      ) : (
        cart.map((product) => (
          <div key={product._id} className="cart_product">
            <img src={product.image} alt={product.name} width={"150px"} />
            <div className="cart_product_content">
              <h6>{product.productName}</h6>
              <p className="description">{product.productDescription}</p>
              <h6>${product.offerPrice}</h6> <br />
            </div>
          </div>
        ))
      )}
    </div>
    {cart.length > 0 && (
      <button onClick={() => navigate("/checkout")}>Checkout</button>
    )}
  </div>
  );
};

export default Cart;
