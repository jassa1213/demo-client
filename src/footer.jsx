import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer">
            <h1>Quick Links</h1>
            <div className="main_links">
            <ul>
                <li>Exchange & Return Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
            </ul>
            </div>
            <br />
            <div className="cards">
                <span>We accept the following paying methods</span>
                <div className="cards_links">
                    <img src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_110,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png" alt="" />
                    <img src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png" alt="" />
                    <img src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_110,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png" alt="" />
                    <img src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png" alt="" />
                    <img src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-jcb%403x.png" alt="" />
                    <img src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_104,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png" alt="" />
                    <img src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_110,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png" alt="" />
                    <img src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_110,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png" alt="" />
                </div>
            </div>
         
        </div>
        <div className="rights">
                <p>@2023 Shop Nest. &nbsp; All rights reserved.</p>
            </div>
    </>
  )
}

export default Footer