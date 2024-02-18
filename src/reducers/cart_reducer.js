import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY
} from "../actions/action_types";

const initialState = {
  cart: [],

  productQuantities: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
   
      case UPDATE_QUANTITY:
        // Handle updating quantity
        const { productId, quantity } = action.payload;
        return {
          ...state,
          productQuantities: {
            ...state.productQuantities,
            [productId]: quantity,
          },
        };
  
    default:
      return state;
  }
};

export default cartReducer;
