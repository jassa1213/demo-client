import {
    GET_PRODUCTS_BY_CATEGORY_REQUEST,
    GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_FAILURE,
  } from './action_types';
  import axios from 'axios';
  
  export const getProductsByCategoryRequest = () => ({ type: GET_PRODUCTS_BY_CATEGORY_REQUEST });
  export const getProductsByCategorySuccess = (products) => ({
    type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    payload: products,
  });
  export const getProductsByCategoryFailure = (error) => ({
    type: GET_PRODUCTS_BY_CATEGORY_FAILURE,
    payload: error,
  });
  
  export const getProductsByCategoryAction = (category) => async (dispatch) => {
    try {
      dispatch(getProductsByCategoryRequest());
      const response = await axios.get(`http://localhost:1213/product/get-products/${category}`);
      console.log(response.data)
      dispatch(getProductsByCategorySuccess(response.data));
    } catch (error) {
      console.error('Error fetching all products:', error);
      dispatch(getProductsByCategoryFailure(error));
    }
  };