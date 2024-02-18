import React, { useEffect, useRef, useState } from "react";
import "./featured_products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./actions/cart_action";
import { getProductsByCategoryAction } from "./actions/get_products_by_category_action";
import { getAllProductsAction } from "./actions/get_products_action";
import { useNavigate, useParams, useLocation } from "react-router";
import Navbar from "./navbar";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const componentRef = useRef(null);
  const { search } = useLocation();
  const { category } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const getProductsByCategorySelector = useSelector(
    (state) => state.getProductsByCategory
  );
  const getAllProductsSelector = useSelector((state) => state.getAllProducts);

  const {
    products: allProducts,
    loading: allLoading,
    error: allError,
  } = getAllProductsSelector;
  const {
    products: categoryProducts,
    loading: categoryLoading,
    error: categoryError,
  } = getProductsByCategorySelector;

  const products = category ? categoryProducts : allProducts;
  const loading = category ? categoryLoading : allLoading;
  const error = category ? categoryError : allError;

    
    const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(search);
    const queryParam = urlSearchParams.get("query") || "";
    setSearchQuery(queryParam);

    if (!category) {
      dispatch(getAllProductsAction());
    } else {
      dispatch(getProductsByCategoryAction(category));
    }
  }, [dispatch, cart, category, search]);

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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);

    // Update URL with the new search query
    navigate(`/search?query=${value}`);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={componentRef}>
      <Navbar onSearch={handleSearch} />
      <div className="featured_products">
        {loading && <>Loading...</>}
        {error && <>Error</>}
        <h1>Featured Products</h1>
        <nav className="featured_products_navbar">{/* ... */}</nav>


        <div className="all_products">
          {filteredProducts.map((product) => (
            <div className="single_product" key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                onClick={() => handleProductClick(product._id)}
              />
              <div className="single_product_content">
                <span>{product.productName}</span>
                <h5>${product.offerPrice}</h5>
                <p>{product.productDescription}</p>
                <button onClick={() => handleAddToCart(product)}>
                  {cart.some((item) => item._id === product._id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="pagination">{renderPageButtons()}</div> */}
      </div>
    </div>
  );
};

export default FilteredProducts;
