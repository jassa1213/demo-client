import React from "react";
import "./seller_dashboard.css";
import DashboardLeft from "./dashboard_left";
import DashboardRight from "./dashboard_right";

const Admin = () => {
  return (
    <div className="admin_dashboard">
<DashboardLeft/>
      <div className="admin_sidebar_mid">
        <div className="admin_sidebar_mid_navbar">
          <h3>Dashboard</h3>
          <input type="search" placeholder="Search your product" />
        
        </div>
        <div className="admin_sidebar_mid_content">
          <div className="admin_sidebar_mid_cards">
            <div className="admin_sidebar_mid_card" style={{  background:"wheat"}}>
                <img src="https://www.shutterstock.com/shutterstock/photos/467140694/display_1500/stock-vector-sales-growth-bar-chart-icon-vector-style-is-flat-iconic-symbol-with-rounded-angles-yellow-color-467140694.jpg" alt="" />
                <p>Traffic</p>
                <h5>36% Increased</h5>

            </div>
            <div className="admin_sidebar_mid_card" style={{  background:"violet"}}>
            <img src="https://img.freepik.com/premium-vector/concept-banner-chart-data-analics-3d-business-graph-pink-color-growth-progress-pink-arrow-vector-illustration_257312-2113.jpg?w=2000" alt="" />
                <p>Sales</p>
                <h5>19% Increased</h5>
            </div>
            <div className="admin_sidebar_mid_card" style={{background:"palegreen"}}>
            <img src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1707/faysalfarhan170701003/81884803-clients-group-icon-isolated-on-glassy-green-round-button-abstract-illustration.jpg" alt="" />
                <p>New Clients</p>
                <h5>25% Increased</h5>
            </div>
          </div>

          </div>
      </div>
<DashboardRight/>
    </div>
  );
};

export default Admin;
