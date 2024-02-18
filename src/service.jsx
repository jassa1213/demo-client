import React from "react";
import "./service.css";
import Navbar from "./navbar";
import NewsLetter from "./newsletter";
import Footer from "./footer";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="service">
        <h1>
          Shopnest - the ultimate platform for sellers seeking a dynamic and
          thriving marketplace.
        </h1>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Service;
