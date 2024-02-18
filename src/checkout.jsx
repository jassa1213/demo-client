import React, { useEffect, useState } from "react";
import "./checkout.css";
import Navbar from "./navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./actions/cart_action";
import { useNavigate } from "react-router";

const Checkout = () => {
  // key_id: "rzp_test_v0BtaOa5dJRglG",
  const navigate = useNavigate();

  const product = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    console.log(product.quantity);
  }, [product]);

  const handleIncrementQuantity = () => {
    // console.log(item);
    // const newQuantity = item.quantity + 1;
    // dispatch(updateQuantity(item._id, newQuantity));
    console.log(quantity);
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    // Function to decrement the quantity
    // const newQuantity = item.quantity - 1;
    // if (newQuantity > 0) {
    // dispatch(updateQuantity(item._id, newQuantity)); // Dispatch action to update quantity

    // }
    setQuantity(quantity - 1);
    console.log(quantity);
  };

  const dispatch = useDispatch();

  // const cart =  JSON.parse(localStorage.getItem('cart')) || []
  const cart =
    useSelector((state) => state.cart.cart) &&
    JSON.parse(localStorage.getItem("cart"));

  let totalSum = 0;

  // Calculate the total sum
  cart.forEach((product) => {
    const productPrice = parseFloat(product.offerPrice);
    const productQuantity = product.quantity;
    const totalPriceForProduct = productPrice * productQuantity;
    totalSum += totalPriceForProduct;
  });

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));

    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = updatedCart.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const lineStyle = {
    border: "none",
    borderTop: "2px solid #000", // Greyish color
    margin: "10px 0", // Adjust margin as needed
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1213/payment/create-order",
        {
          amount: totalSum,
        }
      );
      const orderId = response.data.order.id;
      console.log(orderId);
      const options = {
        key: "rzp_test_VNH7xstzhpP7Cf",
        amount: totalSum * 100,
        currency: "INR",
        name: "Shop Nest",
        description: "The ultimate destination for shopping.",
        order_id: orderId,
        handler: async function (response) {
          const verify = await axios.post(
            "http://localhost:1213/payment/verify-payment",
            response
          );
          console.log(verify.data);
          navigate("/order-confirmation");
        },
        theme: {
          color: "#121212",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log("Error initializing payment : ", error);
      navigate("/payment-cancellation");
    }
  };

  return (
    <>
      <div className="checkout">
        <Navbar />

        <div className="checkout_boxes">
          <div className="checkout_cart">
            <h5>Cart</h5>

            {cart.length === 0 ? (
              <div className="cart_empty">
                <img
                  src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  alt=""
                />
                <div className="cart_empty_content">
                  <h2>
                    It seems like you don't have <br /> any product in your cart
                  </h2>
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="checkout_cart_table">
                {cart.map((product) => (
                  <div className="checkout_cart_product" key={product._id}>
                    <img
                      src={product.image}
                      alt={product.productName}
                      width={"200px"}
                    />
                    <div className="checkout_cart_product_content">
                      <h6>{product.productName}</h6>
                      <p>{product.productDescription}</p>
                      <table>
                        <tbody>
                          <tr>
                            <td className="margin-right-30">
                              <div className="quantity-control">
                                <h6 className="quantity-price">
                                  ${product.offerPrice * product.quantity}
                                </h6>
                              </div>
                            </td>

                            <button
                              onClick={() => handleDecrementQuantity(product)}
                              className="quantity-button"
                            >
                              -
                            </button>
                            <span className="quantity">{product.quantity}</span>

                            <button
                              onClick={() => handleIncrementQuantity(product)}
                              className="quantity-button"
                            >
                              +
                            </button>
                            <td>
                              <button
                                className="remove-button"
                                onClick={() =>
                                  handleRemoveFromCart(product._id)
                                }
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                {/* Additional content for the checkout table, if needed */}
              </div>
            )}
          </div>
          <div className="checkout_bill">
            <h5>Pricing Details</h5>
            <div className="checkout_bill_table">
              <div className="checkout_bill_table_content">
                <h2>
                  Order Price : <span>{totalSum}$</span>
                </h2>
                <h2>
                  Shipping Charges : <span>0$</span>
                </h2>
                <br />
                <hr style={lineStyle} />
                <h2>
                  Total Price : <span>{totalSum}$</span>
                </h2>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
