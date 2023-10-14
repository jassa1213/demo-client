import React from "react";
import "./category.css";
const Category = () => {
  return (
    <>
      <div className="category">
        <div className="category_heading">
          <h2>Shop by Category</h2>
          <div className="category_content">
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"
                  alt=""
                />
              </div>
              <h3>Furniture</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"
                  alt=""
                />
              </div>
              <h3>Hand Bags</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"
                  alt=""
                />
              </div>
              <h3>Sneakers</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"
                  alt=""
                />
              </div>
              <h3>Travels</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"
                  alt=""
                />
              </div>
              <h3>Tech</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"
                  alt=""
                />
              </div>
              <h3>Books</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
