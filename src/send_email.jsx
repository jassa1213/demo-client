import React, { useEffect, useState } from "react";
import "./send_email.css";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import{useNavigate} from "react-router-dom"
import sendEmailAction from "./actions/send_email_actions";
import verifyOtpAction from "./actions/verify_otp_action";

const SendEmail = () => {
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
        const otpValue = otp.join("");
    
        // Print the OTP value to the console
        console.log("OTP Value:", otpValue);
    dispatch(verifyOtpAction(userEmail,otpValue,navigate))


    // axios
    //   .post("http://localhost:1213/user/verify-otp", {
    //     email: userEmail,
    //     otp: otpValue,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.setItem("email", userEmail);
    //     navigate("/user-register");
    //   })
    //   .catch((error) => {
    //     console.error("OTP Verification Failed:", error);
    //   });
  };

  const handleSendEmail = () => {
    dispatch(sendEmailAction(userEmail));
    // // Create an object with the user's email

    // // Make an API request to send the email data
    // axios
    //   .post("http://localhost:1213/user/send-otp", {email:userEmail})
    //   .then((response) => {
    //     // Handle success, you can update the UI or show a success message
    //     console.log("Email sent successfully:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Email sending failed:", error);
    //     console.log("Error Response:", error.response); // Log the response for more details
    //   });

    setSentOtp(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <img src={logo} alt="" width="270px" />
        </div>
        <div className="navbar_auth_right">
          <button className="active">Register</button>
          <button>Login</button>
        </div>
      </nav>

      <div className="send_email">
        {loading && <Loading />}
        <div className="send_email_left">
          <img
            src="https://res.cloudinary.com/notesprofile/image/upload/v1695574487/Screenshot_1445-03-09_at_15.08.56_apbijy.png"
            alt=""
          />
        </div>
        <div className="send_email_right">
          {sentOtp ? (
            <div className="send_email_content">
              <h2>USER &nbsp; REGISTER</h2>
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
              <input
                type="text"
                placeholder="Email address"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <br />

              <button onClick={handleSendEmail}>Submit</button>
              <br />

              <p>--------OR--------</p>
              <p className="span">
                Already have an account? &nbsp; &nbsp;
                <a href="www.google.com">Sign in</a>
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
                Didn't receive a code? &nbsp; &nbsp;
                <a href="www.instagram.com">resend?</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SendEmail;
