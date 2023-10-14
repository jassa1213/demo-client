import React from "react";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";

import "./seller_single_product.css";

const SellerSingleProduct = () => {

  return (
    <>
      <div className="seller_dashboard">
        <DashboardLeft />
        <div className="sidebar_mid">
            <h1 style={{padding:"25px", borderBottom:"1px solid #333"}}> Product Details</h1>
        <div className="seller_single_product_page" >
        <div className="seller_single_product_page_left">
          <img
            src="https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg"
            alt=""
            width={"100%"}
          />
          <div className="seller_single_product_description">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              incidunt ad ducimus quisquam voluptates nihil atque, mollitia
              commodi excepturi aspernatur cupiditate! Molestiae distinctio
              temporibus reprehenderit reiciendis voluptas soluta error nulla,
              voluptatem tempore maxime voluptates deserunt.
            </span>
          </div>
        </div>
        <div className="seller_single_product_page_right">
          <div className="seller_single_product_page_right_content">
            <h3>HKI Tech QuadCopter Drone With 360 Camera & Controller</h3>
            <p>50$</p>
            <h5 >Product Info:</h5>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur distinctio libero sarupti, eius hic dignissimos, odit
              totam consectetur sequi corporis blanditiis ipsa, illum aliquid
              nemo eos molestias cupiditate reiciendis quasi voluptatem eveniet
              quisquam!
            </span>
            <br />
            <h5 >Category:</h5>
        <span>Electronics</span>
            <br />
            <p style={{ marginTop: "30px",marginBottom:"0" }}>Shipping Address :</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
            <button>Edit Product</button>
          </div>
        </div>
      </div>
        </div>
        <DashboardRight />
      </div>
    </>
  );
};

export default SellerSingleProduct;
