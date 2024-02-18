import "./navbar.css";
import logo from "./logo.png";
import React, { useState } from "react";
import Cart from "./cart";
import { useNavigate } from "react-router";

const Navbar = ({ onSearch }) => {
 
  const [isCartOpen, setCartOpen] = useState(false);

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" onClick={() => navigate("/")} />
        </div>
        <div className="navbar_center">
          <ul>
            <li>What's New</li>
            <li>Deals</li>
            <li onClick={() => navigate("/products")}>Products</li>
            <li onClick={() => navigate("/service")}>Services</li>
            <input
              type="text"
              placeholder={"Search Product"}
              onChange={handleSearch}
              onClick={() => {
                navigate("/search");
              }}
            />
            <span
              style={{
                cursor: "pointer",
                position: "relative",
                left: "-40px",
                opacity: "0.7",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 0 24 24"
                width="30"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
            </span>
          </ul>
        </div>
        <div className="navbar_right">
          <ul>
            <li className="dropdown">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 0 24 24"
                  width="30"
                  fill="#333"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
              <div className="dropdown-content">
                <button>Log out</button>
              </div>
            </li>

            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  viewBox="0 0 24 24"
                  width="25"
                  fill="#333"
                  onClick={openCart}
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>

        <div className="navbar_right">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  viewBox="0 0 24 24"
                  width="25"
                  fill="#333"
                  onClick={openCart}
                >
                  {/* Your cart icon */}
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`cart-modal ${isCartOpen ? "open" : ""}`}>
        {/* Content of your cart modal */}

        <button
          onClick={closeCart}
          style={{ backgroundColor: "#fff", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 0 24 24"
            width="30"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <Cart />
        {/* ... Additional content ... */}
      </div>
    </>
  );
};

export default Navbar;
