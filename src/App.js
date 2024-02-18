import React from "react";
import Navbar from "./navbar";
import Body from "./body";
import Brands from "./brands";
import Category from "./category";
import FeaturedProducts from "./featured_products";
import Footer from "./footer";
import HelpCenter from "./help_center";
import NewsLetter from "./newsletter";
import Services from "./services";
import SpecialOffer from "./special_offers";
import TodaySpecial from "./today_special";
import WeeklyPopular from "./weeklyPopular";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Body />
        <Category />
        <SpecialOffer />
        <Services />
        <WeeklyPopular />
        <TodaySpecial />
        <Brands />
        <FeaturedProducts />
        <NewsLetter />
        <HelpCenter />
        <Footer />
      </div>
    </>
  );
}

export default App;
