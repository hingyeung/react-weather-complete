import appReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

// a function returning a function returning a function
// a middleware that log before and after action dispatch
const stateChangeLogger = (store: any) => (next: any) => (action: any) => {
  // before state change
  console.groupCollapsed('State change');
  console.dir(store.getState());

  // apply state change
  let result = next(action);

  // after state change
  console.dir('after', store.getState());
  console.groupEnd();
  return result;
};

export default () => {
  return applyMiddleware(thunk, stateChangeLogger)(createStore)(appReducer)
}