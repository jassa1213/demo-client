import {
    GET_PRODUCTS_BY_SELLER_REQUEST,
    GET_PRODUCTS_BY_SELLER_SUCCESS,
    GET_PRODUCTS_BY_SELLER_FAILURE,
  } from  './action_types';
  import axios from 'axios';
  
  const getProductsBySellerAction = (sellerUsername) => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_BY_SELLER_REQUEST });
      const response = await axios.get(`http://localhost:1213/product/get-products/${sellerUsername}`);
      dispatch({ type: GET_PRODUCTS_BY_SELLER_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
  
      dispatch({
        type: GET_PRODUCTS_BY_SELLER_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : 'An error occurred',
      });
    }
  };
  
  export default getProductsBySellerAction;