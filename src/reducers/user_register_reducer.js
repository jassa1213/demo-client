// userRegistrationReducer.js
import * as types from '../actions/action_types';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case types.REGISTER_USER_FAILURE:
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

export default userRegisterReducer;
