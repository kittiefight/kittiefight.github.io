import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

const devEnhancer = composeWithDevTools(applyMiddleware(thunk));
const prodEnhancer = applyMiddleware(thunk);
const enhancer =
  process.env.NODE_ENV === 'development' ? devEnhancer : prodEnhancer;

const store = createStore(rootReducer, enhancer);

export default store;
