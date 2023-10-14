// addProductReducer.js
import {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
  } from '../actions/action_types';
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case ADD_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addProductReducer;
  