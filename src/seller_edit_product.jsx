import React, { useEffect, useState } from "react";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";
import "./seller_add_product.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import Loading from "./loading";
import editProductAction from "./actions/edit_product_actions";
import { getProductByIdAction } from "./actions/get_product_by_id_action";
import { useParams } from "react-router-dom"; 
import  removeProductAction  from "./actions/remove_product_action"; 

const SellerEditProduct = () => {
  const [productDataEdited, setProductDataEdited] = useState({
    productName: "",
    productDescription: "",
    marketPrice: "",
    offerPrice: "",
    rating: "",
    manufacturerAddress: "",
    size: "",
    image: null,
    productDetails: "",
    category: "",
    username: localStorage.getItem("sellerUsername"),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDataEdited({
      ...productDataEdited,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProductByIdAction(productId));
  }, [dispatch, productId]);

  const getProductSelector = useSelector((state) => state.getProductById);
  const { productData, loading } = getProductSelector;
  // Log the updated productDataEdited when it changes
  useEffect(() => {
    console.log("Product Data:", productData);
    // setProductDataEdited(productData);
  }, [productData]);

  // When productData changes, update productDataEdited
  useEffect(() => {
    if (productData !== null) {
      setProductDataEdited(productData);
    }
  }, [productData]);
  const preset_key = "shopnest";
  const cloud_name = "notesprofile";
  const handleRemoveProduct =(e)=>{
    e.preventDefault();
    dispatch(removeProductAction(productId,navigate));

  }
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
      const transformedUrl = secureUrl.replace(
        "/upload/",
        "/upload/c_fill,h_350,w_340/"
      );

      // Set the transformed URL in your state or do further processing as needed
      console.log(transformedUrl);

      setProductDataEdited({
        ...productDataEdited,
        image: transformedUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProduct = (e) => {
    e.preventDefault()
    dispatch(editProductAction(productId, productDataEdited));
  };

  return (
    <>
      <div className="seller_dashboard">
        <DashboardLeft />
        <div className="sidebar_mid">
          {loading && <Loading />}
          <h1 style={{ padding: "20px 0" }}>Edit Product</h1>
          <div className="seller_add_product">
            <div className="seller_add_product_left">
              <input
                type="text"
                placeholder="Product Name"
                name="productName"
                onChange={handleChange}
                value={productDataEdited.productName}
              />
              <textarea
                name="productDescription"
                id=""
                cols="27"
                rows="2"
                placeholder="Product description"
                onChange={handleChange}
                value={productDataEdited.productDescription}
              ></textarea>
              <input
                type="text"
                placeholder="Market Price"
                name="marketPrice"
                onChange={handleChange}
                value={productDataEdited.marketPrice}
              />
              <input
                type="text"
                placeholder="Offer Price"
                name="offerPrice"
                onChange={handleChange}
                value={productDataEdited.offerPrice}
              />
              <input
                type="text"
                placeholder="Rating (out of 5)"
                name="rating"
                onChange={handleChange}
                value={productDataEdited.rating}
              />
              <textarea
                name="manufacturerAddress"
                id="manufacturerAddress"
                cols="27"
                rows="2"
                placeholder="Manufacturer Address"
                onChange={handleChange}
                value={productDataEdited.manufacturerAddress}
              ></textarea>
              <input
                type="text"
                name="size"
                placeholder="Size (optional)"
                onChange={handleChange}
                value={productDataEdited.size}
              />
              <textarea
                name="productDetails"
                id="productDetails"
                cols="27"
                rows="2"
                placeholder="Product Details"
                onChange={handleChange}
                value={productDataEdited.productDetails}
              ></textarea>
              <select
                id="category"
                name="category"
                style={{ width: "86.5%" }}
                onChange={handleChange}
                value={productDataEdited.category}
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
                accept=".png"
                placeholder="Image"
                name="product_image"
                onChange={handleImageUpload}
                multiple
              />
              <br />
              {!productDataEdited.image && <span>Image of product</span>}
              <button style={{ marginLeft: "13em" }} onClick={handleEditProduct}>Make Changes</button>
              <br />
              <button style={{ marginLeft: "15em", marginTop: "25px" }} onClick={handleRemoveProduct}>
                Remove
              </button>
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

export default SellerEditProduct;
