import React from 'react'
import "./special_offers.css"

const SpecialOffer = () => {
  return (
    <>
    <div className="special_offer">
        <div className="special_offer_1">
            <div className="content_box">
            <img src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1560,h_936,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg" alt="" />
            <div className="content">
                <p>Holiday Deals</p>
                <h3>Up to <br /> 30% off</h3>
                <p>Selected Smartphone Brands</p>
                <button>Shop Now</button>
            </div>
            </div>
        </div>
        <div className="special_offer_2">
        <div className="content_box">
                <img src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1560,h_936,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg" alt="" />
                <div className="content">
                {/* <p>Holiday Deals</p> */}
                <h3>Take Your <br /> Sound  <br />Anywhere</h3>
                <p>Top Headphone Brands</p>
                <button>Shop Now</button>
            </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default SpecialOffer