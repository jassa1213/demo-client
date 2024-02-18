import {
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAILURE,
  } from './action_types';
  import axios from 'axios';
  
  const removeProductAction = (productId,navigate) => async (dispatch) => {
    try { 
      dispatch({ type: REMOVE_PRODUCT_REQUEST });
      // Send a DELETE request to the server to remove the product
     const response = await axios.delete(`http://localhost:1213/product/remove-product/${productId}`);
     console.log(response)
       dispatch({ type: REMOVE_PRODUCT_SUCCESS,payload:response });
    navigate('/seller/view-product');
    } catch (error) {
      console.error('Error removing product:', error);
      dispatch({
        type: REMOVE_PRODUCT_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : 'An error occurred',
      });
    }
  };
  
  export default removeProductAction;
  