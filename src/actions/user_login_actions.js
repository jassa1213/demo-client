import { LOGIN_USER_FAILURE,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS } from "../actions/action_types";
import axios from "axios"

const loginUser= (email,password)=>async(dispatch)=>{
  try {
      dispatch({type:LOGIN_USER_REQUEST})
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }

      const response = await axios.post("http://localhost:1213/user/login-user",{email,password},config)
      dispatch({type:LOGIN_USER_SUCCESS,payload:response})
      console.log(response.data.message)

      localStorage.setItem("userInfo", JSON.stringify(response.data.message));

  } catch (error) {

  console.log("Error response from server:", error);
    let errorMessage = "An error occurred"; // Default error message

  
    if (error.response && error.response.data.error) {
      errorMessage = error.response.data.error; // Use the error message from the server if available
    }

    dispatch({ type: LOGIN_USER_FAILURE, payload: errorMessage });
  }
}
export default loginUser;