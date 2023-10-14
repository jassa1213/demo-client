import React from 'react'
import NavbarSeller from './navbar_seller'
import "./seller.css"
import Body from './body';
import Brands from './brands';
import Category from './category';
import FeaturedProducts from './featured_products';
import Footer from './footer';
import HelpCenter from './help_center';
import NewsLetter from './newsletter';
import Services from './services';
import SpecialOffer from './special_offers';
import TodaySpecial from './today_special';
import WeeklyPopular from './weeklyPopular';
const Seller = () => {
  return (
    <>
    <div className="seller">
    <NavbarSeller/>
    <Body/>
    <Category/>
    <SpecialOffer/>
    <Services/>
    <WeeklyPopular/>
    <TodaySpecial/>
    <Brands/>
    <FeaturedProducts/>
    <NewsLetter/>
    <HelpCenter/>
    <Footer/>
    </div>
    </>
  )
}

export default Seller