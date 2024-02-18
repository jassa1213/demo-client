// reducers.js
import {
    GET_PRODUCTS_BY_CATEGORY_REQUEST,
    GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    GET_PRODUCTS_BY_CATEGORY_FAILURE,
  } from "../actions/action_types";
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const getProductsByCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_BY_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_PRODUCTS_BY_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null,
        };
      case GET_PRODUCTS_BY_CATEGORY_FAILURE:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getProductsByCategoryReducer;
  