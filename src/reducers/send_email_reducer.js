// emailReducer.js
import * as types from '../actions/action_types';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const sendEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEND_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case types.SEND_EMAIL_FAILURE:
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

export default sendEmailReducer;
