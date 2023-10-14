import React, { useEffect } from "react";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";
import "./seller_add_product.css";
import axios from "axios";

const SellerViewProduct = () => {
  useEffect(() => {
    const sellerUsername = localStorage.getItem("sellerUsername");
    console.log("Stored Username:", sellerUsername);

    // Make a GET request to fetch products by seller username
    axios
      .get(`http://localhost:1213/product/get-products/${sellerUsername}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <div className="seller_dashboard">
        <DashboardLeft />
        <div className="sidebar_mid">
          <div className="search_seller_product">
            <input type="text" placeholder="Search your product" />
          </div>
          <h2 style={{ borderBottom: "1.5px solid #333" }}>Your Products</h2>
          <div className="seller_add_product">
            <div
              className="seller_featured_products"
              style={{ margin: "-5px 10px" }}
            >
              <div className="all_products">
                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>

                <div className="single_product">
                  <img
                    src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png"
                    alt=""
                  />
                  <div className="single_product_content">
                    <span>Airpods Max </span> <h5>50$</h5>
                    <p>A perfect balance of high-fidelity audio</p>
                    <button>View Product</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardRight />
      </div>
    </>
  );
};

export default SellerViewProduct;
