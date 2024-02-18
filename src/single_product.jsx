import React, { useEffect, useState } from "react";
import "./single_product.css";
import Navbar from "./navbar";
import HelpCenter from "./help_center";
import "./single_product.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./footer";
import NewsLetter from "./newsletter";
import { useParams } from "react-router";
import { getProductByIdAction } from "./actions/get_product_by_id_action";
import { addToCart, removeFromCart } from "./actions/cart_action";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getProductsByIdSelector = useSelector((state) => state.getProductById);
  const { productData, loading, error } = getProductsByIdSelector;
  const cart = useSelector((state) => state.cart.cart);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    // Check if the product has already been fetched
    if (!fetched) {
      dispatch(getProductByIdAction(id));
      setFetched(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [fetched, dispatch, id]);
  console.log("Product", productData);

  // Render your component based on productData, loading, and error

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);

    if (!isNaN(newValue) && newValue >= 0) {
      setQuantity(newValue);
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (loading) {
      return <div>Loading: {loading.message}</div>;
    }
  };

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item._id === product._id);
    if (productInCart) {
      dispatch(removeFromCart(product._id));
      const updatedCart = cart.filter((item) => item._id !== product._id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      dispatch(addToCart(product));
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  return (
    <>
      <Navbar />

      {productData && (
        <>
          <div className="single_product_page">
            <div className="single_product_page_left">
              <img src={productData.image} alt="" width={"100%"} />
              <div className="single_product_description">
                <span>{productData["productDescription"]}</span>
              </div>
            </div>
            <div className="single_product_page_right">
              <div className="single_product_page_right_content">
                <h3>{productData.productName}</h3>
                <p>{productData.offerPrice}</p>
                <h5>Quantity :</h5>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <br />
                <h5>Product Info:</h5>
                <span>{productData.productDetails}</span>
                <br />
                <button onClick={() => handleAddToCart(productData)}>
                  {cart.some((item) => item._id === productData._id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
                <p style={{ marginBottom: "-0.1px" }}>Shipping Address :</p>
                <span>{productData.manufacturerAddress}</span>
              </div>
            </div>
          </div>
        </>
      )}

      <NewsLetter />
      <HelpCenter />
      <Footer />
    </>
  );
};

export default SingleProduct;
