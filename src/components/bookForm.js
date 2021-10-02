import { React, useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { createBook, getBooks } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const postToApi = fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(),
    } // eslint-disable-line comma-dangle
  ).then((res) => res.text());
  const submitBookToStore = (e) => {
    e.preventDefault();
    console.log(postToApi);
    const newBook = {
      title,
      category,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(createBook(newBook));
    dispatch(getBooks());
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <h2>Add a new Book</h2>
      <input
        type="text"
        name="title"
        placeholder="Add a title.."
        onChange={updateTitle}
        value={title}
      />
      <input
        type="text"
        name="author"
        placeholder="Add an author.."
        onChange={updateCategory}
        value={category}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BookForm;
