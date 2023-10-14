import { SEND_EMAIL_REQUEST, SEND_EMAIL_FAILURE, SEND_EMAIL_SUCCESS } from "./action_types";
import axios from 'axios';

const sendEmailAction = (user_email) => async (dispatch) => {
  try {
    dispatch({ type: SEND_EMAIL_REQUEST });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await axios.post("http://localhost:1213/user/send-otp", {email:user_email} , config);
    dispatch({ type: SEND_EMAIL_SUCCESS, payload: response });
    console.log(response);
  } catch (error) {
    console.log("Error response from server:", error);
    let errorMessage = "An error occurred"; // Default error message

    if (error.response && error.response.data.error) {
      errorMessage = error.response.data.error; // Use the error message from the server if available
    }

    dispatch({ type: SEND_EMAIL_FAILURE, payload: errorMessage });
  }
};

export default sendEmailAction;