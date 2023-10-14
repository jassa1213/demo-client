import { REGISTER_USER_REQUEST, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./action_types";
import axios from 'axios';

const userRegistrationAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await axios.post("http://localhost:1213/user/register-user", userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS });
    console.log(response.data.message);

    // You can handle success behavior, such as redirecting the user.

  } catch (error) {
    console.log("Error response from server:", error);
    let errorMessage = "An error occurred"; // Default error message

    if (error.response && error.response.data.error) {
      errorMessage = error.response.data.error; // Use the error message from the server if available
    }

    dispatch({ type: REGISTER_USER_FAILURE, payload: errorMessage });
  }
};

export default userRegistrationAction;
