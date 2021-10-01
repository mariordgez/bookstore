import { createStore, combineReducers, applyMiddleware } from 'redux'; // eslint-disable-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
