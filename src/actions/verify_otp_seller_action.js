import {
    VERIFY_OTP_REQUEST,
    VERIFY_OTP_FAILURE,
    VERIFY_OTP_SUCCESS,
  } from "./action_types";
  import axios from 'axios';
  
  const verifyOtpSellerAction = (userEmail, otpValue, navigate) => async (dispatch) => {
  
    try {
      dispatch({ type: VERIFY_OTP_REQUEST });
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      const response = await axios.post("http://localhost:1213/user/verify-otp", {
        email: userEmail,
        otp: otpValue,
      }, config);
      
      dispatch({ type: VERIFY_OTP_SUCCESS, payload: response });
      
      navigate("/seller-register")
    } catch (error) {
      console.log("Error response from server:", error);
      let errorMessage = "An error occurred"; // Default error message
  
      if (error.response && error.response.data.error) {
        errorMessage = error.response.data.error; // Use the error message from the server if available
      }
  
      dispatch({ type: VERIFY_OTP_FAILURE, payload: errorMessage });
    }
  };
  
  export default verifyOtpSellerAction;
  