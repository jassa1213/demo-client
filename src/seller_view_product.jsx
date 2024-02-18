import React, { useEffect } from "react";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";
import { useSelector, useDispatch } from 'react-redux';
import getProductsBySellerAction  from './actions/get_products_by_seller_action';

const SellerViewProduct = () => {

  const sellerUsername = localStorage.getItem('sellerUsername');
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.getProductsBySeller);
    

  useEffect(() => {
    dispatch(getProductsBySellerAction(sellerUsername));
  }, [dispatch, sellerUsername]);


  useEffect(() => {
    if (loading) {
      // Handle loading state if needed
    } else if (error) {
      // Handle error state if needed
      console.error('Error fetching products:', error);
    } else {
      // Access products data
      console.log('Fetched products:', products);
    }
  }, [loading, error, products]);

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
  {loading && <p>Loading products...</p>}
      {error && <p>Error fetching products: {error}</p>}
      {products.map((product) => (
        <div className="single_product" key={product._id}>
          <img src={`${product.image}`} alt={product.name} />
          <div className="single_product_content">
            <span>{product.productName}</span> <h5>${product.marketPrice}</h5>
            <p>{product.productDescription}</p>
            <button>View Product</button>
          </div>
        </div>
      ))}

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
