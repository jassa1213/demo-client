import React, { useEffect, useState } from "react";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";
import "./seller_add_product.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import addProductAction from "./actions/add_product_action";
import Loading from "./loading";

const SellerAddProduct = () => {
  const preset_key = "shopnest";
  const cloud_name = "notesprofile";

  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    marketPrice: "",
    offerPrice: "",
    rating: "",
    manufacturerAddress: "",
    size: "",
    productDetails: "",
    category: "",
    image:null,
    username: localStorage.getItem("sellerUsername")
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const addProductSelector = useSelector((state) => state.addProduct);
  const { loading, error } = addProductSelector;
  
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", preset_key);
  
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        imageData
      );
  
      // Get the secure URL of the uploaded image from the Cloudinary response
      const secureUrl = response.data.secure_url;
  
      // Now, you can apply the transformation to the secure URL as needed
      // For example, you can add the transformation parameters like this:
      const transformedUrl = secureUrl.replace('/upload/', '/upload/c_fill,h_350,w_340/');
  
      // Set the transformed URL in your state or do further processing as needed
      console.log(transformedUrl)

      setProductData({
        ...productData,
        image: transformedUrl
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleAddProduct = async (e) => {
    e.preventDefault();
    dispatch(addProductAction(productData));
  };

  return (
    <>
      <div className="seller_dashboard">
        <DashboardLeft />
        {loading && <Loading />}

        <div className="sidebar_mid">
          <h1 style={{ padding: "20px 0" }}>Add Product</h1>
          <div className="seller_add_product">
            <div className="seller_add_product_left">
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                onChange={handleChange}
                value={productData.productName}
              />

              <textarea
                name="productDescription"
                id=""
                cols="27"
                rows="2"
                placeholder="Product description"
                onChange={handleChange}
                value={productData.productDescription}
              ></textarea>

              <input
                type="text"
                placeholder="Market Price"
                name="marketPrice"
                onChange={handleChange}
                value={productData.marketPrice}
              />

              <input
                type="text"
                placeholder="Offer Price"
                name="offerPrice"
                onChange={handleChange}
                value={productData.offerPrice}
              />

              <input
                type="text"
                placeholder="Rating (out of 5)"
                name="rating"
                onChange={handleChange}
                value={productData.rating}
              />

              <textarea
                name="manufacturerAddress"
                id="manufacturerAddress"
                cols="27"
                rows="2"
                placeholder="Manufacturer Address"
                onChange={handleChange}
                value={productData.manufacturerAddress}
              ></textarea>

              <input
                type="text"
                name="size"
                placeholder="Size (optional)"
                onChange={handleChange}
                value={productData.size}
              />

              <textarea
                name="productDetails"
                id="productDetails"
                cols="27"
                rows="2"
                placeholder="Product Details"
                onChange={handleChange}
                value={productData.productDetails}
              ></textarea>

              <select
                id="category"
                name="category"
                style={{ width: "86.5%" }}
                onChange={handleChange}
                value={productData.category}
              >
                <option value="">Select Category</option>
                <option value="gadgets">Gadgets</option>
                <option value="fashion">Fashion</option>
                <option value="education">Education</option>
                <option value="beauty">Beauty</option>
                <option value="fitness">Fitness</option>
                <option value="sneaker">Sneaker</option>
              </select>

              <input
                type="file"
                placeholder="Image"
                name="product_image"
                onChange={handleImageUpload}
                multiple
              />
              <br />
              {!productData.image && <span>Image of product</span>}


              <button onClick={handleAddProduct}>Submit</button>
            </div>
            <div className="seller_add_product_right">
              <img
                src="https://res.cloudinary.com/notesprofile/image/upload/v1695596240/Screenshot_1445-03-09_at_15.13.58_r5fqvz.png"
                height={"800px"}
                width={"100%"}
                style={{ borderTop: "1.3px solid #333" }}
                alt=""
              />
            </div>
          </div>
        </div>

        <DashboardRight />
      </div>
    </>
  );
};

export default SellerAddProduct;
