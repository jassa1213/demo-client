// addProductReducer.js
import {
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
  } from '../actions/action_types';
  
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const editProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case EDIT_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case EDIT_PRODUCT_FAILURE:
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
  
  export default editProductReducer;
  