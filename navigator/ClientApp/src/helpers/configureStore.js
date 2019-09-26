import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(
  applyMiddleware(ReduxThunk)
);

export default store;
