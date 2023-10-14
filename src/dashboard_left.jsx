import React from 'react'

import logo from "./logo.png";
const DashboardLeft = () => {
  return (
    <>
      <div className="sidebar_left">
        <img src={logo} alt="" width="200px" />
        <div className="sidebar_left_buttons">
          <ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              width="32"
            >
              <g fill-rule="evenodd">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
              </g>
            </svg>
            <li className="active">Dashboard</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              width="32"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <li>Add Product</li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              width="32"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
            </svg>
            <li>View Product</li>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
            <br />
            <br /> <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              width="32"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardLeft