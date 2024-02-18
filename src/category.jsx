import React from "react";
import "./category.css";
import { useNavigate } from "react-router";

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="category">
        <div className="category_heading">
          <h2>Shop by Category</h2>
          <div className="category_content">
            <div className="category_card_content">
              <div
                className="category_card"
                onClick={() => {
                  navigate("/products/fitness");
                }}
              >
                <img
                  src="https://img.freepik.com/free-photo/gym-equipment-with-christmas-theme-decorations_23-2149564405.jpg"
                  alt=""
                />
              </div>
              <h3>Fitness</h3>
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
                  src="https://img.freepik.com/free-photo/creative-display-makeup-products-arrangement_23-2150063089.jpg?w=996&t=st=1700254951~exp=1700255551~hmac=464cdcc5d4e4b68de65a150c586eff1cc6dc20b358ae6917c6403d966ee18a2b"
                  alt=""
                />
              </div>
              <h3>Beauty</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"
                  alt=""
                />
              </div>
              <h3>Gadgets</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"
                  alt=""
                />
              </div>
              <h3>Fashion</h3>
            </div>
            <div className="category_card_content">
              <div className="category_card">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"
                  alt=""
                />
              </div>
              <h3>Education</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
