import { SET_CURRENT_USER } from '../types';

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

// eslint-disable-next-line import/prefer-default-export
export { setCurrentUser };
