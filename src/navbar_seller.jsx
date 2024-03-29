import "./navbar.css";
import logo from "./logo.png";
import React from "react";

const NavbarSeller = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_center">
          <ul>
            <li>What's New</li>
            <li>Deals</li>
            <li>Products</li>
            <li>Dashboard</li>
            <input type="text" placeholder={"Search Product"} />
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
            <li>
              <span >
              <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarSeller;
