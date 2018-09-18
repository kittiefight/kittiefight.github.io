import { combineReducers } from 'redux';
import authReducer from './authReducer';

const appReducer = combineReducers({
  authReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
