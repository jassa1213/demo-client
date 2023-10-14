import {
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
} from './action_types';
import axios from 'axios';

const editProductAction = (productData) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PRODUCT_REQUEST });
    const response = await axios.post('http://localhost:1213/product/edit-product/:productId', productData);
    console.log(response)
    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error adding product:', error);

    dispatch({
      type: EDIT_PRODUCT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : 'An error occurred',
    });
  }
};

export default editProductAction;
