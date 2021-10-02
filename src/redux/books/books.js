import { v4 as uuidv4 } from 'uuid';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GQMmj9TcWecaON9Qj8WH/books';
const initialState = {};

export const getBooks = () => async (dispatch) => {
  const res = await fetch(url);
  const state = await res.json();
  dispatch({ type: GET_BOOKS, state });
};

export const createBook = (book) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    }),
  });
  dispatch(getBooks());
};

export const removeBook = (bookId) => async (dispatch) => {
  const newurl = [url, '/', bookId];

  await fetch(newurl.join(''), {
    method: 'DELETE',
  });
  dispatch(getBooks());
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.state;
    default:
      return state;
  }
};

export default booksReducer;
