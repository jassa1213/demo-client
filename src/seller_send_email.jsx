import React, { useEffect, useState } from 'react'
import logo from "./logo.png";
import sendEmailAction from './actions/send_email_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Loading from './loading';
import verifyOtpSellerAction from './actions/verify_otp_seller_action';

const SellerSendEmail = () => {
  const [sentOtp, setSentOtp] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOTP] = useState(["", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {sendEmailSelector,verifyEmailSelector} = useSelector((state) => state.sendEmail);
  const { loading, error } = {sendEmailSelector,verifyEmailSelector};
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move to the next input box if a digit is entered
      if (value !== "" && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }

  };
  const handleVerifyClick = () => {
    // Join the OTP values into a single string
    const otpValue = otp.join('');

    // Print the OTP value to the console
    console.log('OTP Value:', otpValue);
    dispatch(verifyOtpSellerAction(userEmail,otpValue,navigate))
  };

  const handleSendEmail = ()=>{
dispatch(sendEmailAction(userEmail))
    setSentOtp(false)
  }
  return (
<>
<nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_auth_right">
      <button className='active'>Register</button>
      <button >Login</button>
        </div>
      </nav>
      {loading && <Loading />}

      <div className="send_email">
        <div className="send_email_left">
          <img
            src="https://res.cloudinary.com/notesprofile/image/upload/v1695634638/Screenshot_1445-03-10_at_13.51.06_ckoi7r.png"
            alt=""
          />
        </div>
        <div className="send_email_right">
          {sentOtp ? (
            <div className="send_email_content">
              <h2>Seller &nbsp; Registration</h2>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="34"
                viewBox="0 0 24 24"
                width="34"
                style={{ position: "relative", left: "66px", top: "-3px" }}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <input type="text" placeholder="Email address" 
                onChange={(e) => setUserEmail(e.target.value)} />
              <br />

              <button onClick={handleSendEmail}>Submit</button>
              <br />

              <p>--------OR--------</p>
              <p className="span">
                Already a seller? &nbsp; &nbsp;<a href="www.google.com">Sign in</a>
              </p>
            </div>
          ) : (
            <div className="otp_content">
              <h2>OTP Verification</h2>
              <form>
                <input
                  type="text"
                  id="otp-input-0"
                  value={otp[0]}
                  onChange={(e) => handleChange(e, 0)}
                  maxLength="1"
                  autoComplete="off"
                  className="small-input"
                />
                <input
                  type="text"
                  id="otp-input-1"
                  value={otp[1]}
                  onChange={(e) => handleChange(e, 1)}
                  maxLength="1"
                  autoComplete="off"
                  className="small-input"
                />
                <input
                  type="text"
                  id="otp-input-2"
                  value={otp[2]}
                  onChange={(e) => handleChange(e, 2)}
                  className="small-input"
                  autoComplete="off"
                  maxLength="1"
                />
                <input
                  type="text"
                  id="otp-input-3"
                  value={otp[3]}
                  onChange={(e) => handleChange(e, 3)}
                  maxLength="1"
                  autoComplete="off"
                  className="small-input"
                />
              </form>
              <button onClick={handleVerifyClick}>Verify</button>
              <br />

              <p>--------OR--------</p>
              <p className="span">
                Didn't receive a code? &nbsp; &nbsp;<a href="www.instagram.com">resend?</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>


  )
}

export default SellerSendEmail