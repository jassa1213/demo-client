import axios from "axios";
import {
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "./action_types";

export const getProductByIdRequest = () => ({
  type: GET_PRODUCT_BY_ID_REQUEST,
});
export const getProductByIdSuccess = (productData) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload: productData,
});
export const getProductByIdFailure = (error) => ({
  type: GET_PRODUCT_BY_ID_FAILURE,
  payload: error,
});

export const getProductByIdAction = (productId) => async (dispatch) => {
  try {
    dispatch(getProductByIdRequest());
    const response = await axios.get( 
      `http://localhost:1213/product/get-product/${productId}`
    );
    console.log(response.data);
    dispatch(getProductByIdSuccess(response.data));
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    dispatch(
      getProductByIdFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : "An error occurred"
      )
    );
  }
};
