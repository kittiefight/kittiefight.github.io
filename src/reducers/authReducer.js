import { SET_CURRENT_USER, UNSET_CURRENT_USER } from './../types';

// Declare the initial state for Authentication
const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user
      };
    case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: action.user
      };
    default:
      return state;
  }
};

export default authReducer;
