import React from "react";
import Navbar from "./navbar";
import FeaturedProducts from "./featured_products";
import NewsLetter from "./newsletter";
import Footer from "./footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <FeaturedProducts />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Products;
