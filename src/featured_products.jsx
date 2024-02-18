import React, { useEffect, useRef, useState } from "react";
import "./featured_products.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "./actions/get_products_action";
import { addToCart, removeFromCart } from "./actions/cart_action";
import { getProductsByCategoryAction } from "./actions/get_products_by_category_action";
import { useNavigate, useParams } from "react-router";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const componentRef = useRef(null);


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

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const selectedProducts = products.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  useEffect(() => {
    if (!category) {
      dispatch(getAllProductsAction());
    } else {
      dispatch(getProductsByCategoryAction(category));
    }
    window.scrollTo({top:0, behavior:"smooth"})

  }, [dispatch, cart, category]);

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
    // Redirect to the product page with the product ID as a parameter
    navigate(`/product/${productId}`);
  };


  return (

    <div ref={componentRef}>
    <div className="featured_products">
      {loading && <>Loading...</>}
      {error && <>Error</>}
      <h1>Featured Products</h1>
      <nav className="featured_products_navbar">
        <ul>
          <li
            onClick={() => {
              navigate("/products/gadgets");
            }}
          >
            Gadgets
          </li>
          <li
            onClick={() => {
              navigate("/products/fashion");
            }}
          >
            Fashion
          </li>
          <li
            onClick={() => {
              navigate("/products/education");
            }}
          >
            Education
          </li>
          <li
            onClick={() => {
              navigate("/products/beauty");
            }}
          >
            Beauty
          </li>
          <li
            onClick={() => {
              navigate("/products/fitness");
            }}
          >
            Fitness
          </li>
          <li
            onClick={() => {
              navigate("/products/sneaker");
            }}
          >
            Sneakers
          </li>
        </ul>
      </nav>

      <div className="all_products">
        {selectedProducts.map((product) => (
          <div className="single_product" key={product._id}>
            <img src={product.image} alt={product.name} 
            onClick={() => handleProductClick(product._id)} />
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

      <div className="pagination"  >{renderPageButtons()}</div>
    </div>
    </div>
  );
};

export default FeaturedProducts;
