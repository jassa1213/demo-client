// actions.js
import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
  } from './action_types';
  import axios from 'axios';
  
  export const getAllProductsRequest = () => ({ type: GET_ALL_PRODUCTS_REQUEST });
  export const getAllProductsSuccess = (products) => ({
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  });
  export const getAllProductsFailure = (error) => ({
    type: GET_ALL_PRODUCTS_FAILURE,
    payload: error,
  });
  
  export const getAllProductsAction = () => async (dispatch) => {
    try {
      dispatch(getAllProductsRequest());
      const response = await axios.get('http://localhost:1213/product/get-products');
      dispatch(getAllProductsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching all products:', error);
      dispatch(getAllProductsFailure(error));
    }
  };
  