const GET_BOOKS = 'bookStore/books/GET_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wib10ybZy4rKQLyBThID/books';
const initialState = {};

//FUNCTIONS

export const getBooks = () => async (dispatch) => {
  const res = await fetch(url);
  const state = await res.json();
  dispatch({ type: GET_BOOK, state });
};

export const createBook = (book) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      category: book.category,
    }),
  });
  getBooks();
};

export const removeBook = (bookId) => async (dispatch) => {
  await fetch(`${url}${bookId}`, {
    method: 'DELETE',
  });
  getBooks();
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return  action.state;
    default:
      return state;
  }
};

export default reducer;
