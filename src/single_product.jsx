import React, { useState } from "react";
import "./single_product.css";
import Navbar from "./navbar";
import HelpCenter from "./help_center";
import "./single_product.css";

import Footer from "./footer";
import NewsLetter from "./newsletter";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);

    if (!isNaN(newValue) && newValue >= 0) {
      setQuantity(newValue);
    }
  };
  return (
    <>
      <Navbar />
      <div className="single_product_page">
        <div className="single_product_page_left">
          <img
            src="https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
            alt=""
            width={"100%"}
          />
          <div className="single_product_description">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              incidunt ad ducimus quisquam voluptates nihil atque, mollitia
              commodi excepturi aspernatur cupiditate! Molestiae distinctio
              temporibus reprehenderit reiciendis voluptas soluta error nulla,
              voluptatem tempore maxime voluptates deserunt.
            </span>
          </div>
        </div>
        <div className="single_product_page_right">
          <div className="single_product_page_right_content">
            <h3>HKI Tech QuadCopter Drone With 360 Camera & Controller</h3>
            <p>50$</p>
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
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur distinctio libero sarupti, eius hic dignissimos, odit
              totam consectetur sequi corporis blanditiis ipsa, illum aliquid
              nemo eos molestias cupiditate reiciendis quasi voluptatem eveniet
              quisquam!
            </span>
            <br />
            <button>Add to Cart</button>
            <p style={{ marginBottom: "-0.5px" }}>Shipping Address :</p>
            <span>Lorem ipsum dolor sit.</span>
          </div>
        </div>
      </div>
      <NewsLetter />
      <HelpCenter />
      <Footer />
    </>
  );
};

export default SingleProduct;
