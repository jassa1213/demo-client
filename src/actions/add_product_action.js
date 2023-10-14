import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
} from './action_types';
import axios from 'axios';

const addProductAction = (productData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    const response = await axios.post('http://localhost:1213/product/add-product', productData);
    console.log(response)
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error adding product:', error);

    dispatch({
      type: ADD_PRODUCT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : 'An error occurred',
    });
  }
};

export default addProductAction;
